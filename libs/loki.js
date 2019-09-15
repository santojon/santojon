/**
 * Class used to easily cast javascript classes to other ones
 */
class Loki {
    /**
     * Create a new instance of Loki
     * @param obj: a base object to get all data from
     */
    constructor(obj) {
        if (obj) {
            Object.keys(obj).forEach((key) => {
                this[key] = obj[key]
            })
        }
    }

    /**
     * Transform an object into a Loki (Loki inclusive)
     * Used to attach to other classes, in order to 'lokify' then
     */
    transform() {
        return new Loki(this)
    }

    /**
     * Transforms a Loki object into another class object
     * @param target: the target class to transform in
     * @param caster: an optional caster function, to cast user way
     */
    to(target, caster) {
        if (this instanceof Loki) {
            if (caster) {
                try {
                    return caster(this, target)
                } catch (ex) {
                    var r
                    try {
                        r = caster(target, this)
                    } catch (e) {
                        r = new Object()
                        Object.keys(this).forEach((key) => {
                            if (target.prototype.hasOwnProperty(key)) {
                                r[key] = this[key]
                            }
                        })
                    }
                    return r
                }
            } else {
                try {
                    return new target(this)
                } catch (ex) {
                    var r
                    try {
                        r = new target()
                        Object.keys(this).forEach((key) => {
                            r[key] = this[key]
                        })
                    } catch (e) {
                        r = new Object()
                        Object.keys(this).forEach((key) => {
                            if (target.prototype.hasOwnProperty(key)) {
                                r[key] = this[key]
                            }
                        })
                    }
                    return r
                }
            }
        } else {
            new Loki(this).to(target, caster)
        }
    }

    /**
     * Inject transform function into classes (ie, make it almost Loki)
     */
    static lokify() {
        var args = Array.prototype.slice.call(arguments)
        if (args && args.length > 0) {
            args.forEach((klass) => {
                klass.prototype.transform = Loki.prototype.transform
            })
        }
    }
}