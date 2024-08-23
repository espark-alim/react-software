// spalsh screen utils

export const open = (e, path) => {
    e.preventDefault()
    window.location.href = path;
}

// welcome screen utils

export const handleChange = (e, input, user, setUser) => {
    if (input === 'keep_me_login') {
        setUser({
            ...user,
            keep_me_login: e.target.checked
        })
    }
    else {
        setUser({
            ...user,
            [input]: e.target.value
        })
    }
}

export const handleSubmit = (e, user, setUser, path) => {
    e.preventDefault()
    setUser({
        email: '',
        password: '',
        keep_me_login: false
    })
    window.location.href = path;
    console.log({ user })
}

// forget screen utils

export const handleSend = (e, user, setUser) => {
    e.preventDefault()
    setUser({
        email: '',
    })
    console.log({ user })
}


