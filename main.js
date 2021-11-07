// get or set session (whatever it be)
syncSession()
updateSession({ currentYear: new Date().getFullYear() })
window['session'] = getSession()

// open application homepage
pages.Home({
    user: true,
    projects: true,
    education: false,
    experiences: true
})