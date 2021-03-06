import React from 'react'
import { Fab } from '@material-ui/core'
import { Instagram, LinkedIn, GitHub, Email, WhatsApp, Telegram  } from '@material-ui/icons'
import useStyles from './styles'

function SocialButtons() {
    const classes = useStyles()
    return (
        <div className={classes.groupSocials}>
            <Fab color="primary" href={'https://www.instagram.com/roajeremy'} target="_blank">
                <Instagram />
            </Fab>
            <Fab color="primary" href={'https://www.linkedin.com/in/roajeremy/'} target="_blank">
                <LinkedIn />
            </Fab>
            <Fab color="primary" href={'https://github.com/jeremyroa'} target="_blank">
                <GitHub />
            </Fab>
            <Fab color="primary" href={'https://api.whatsapp.com/send?phone=+584122443946'} target="_blank">
                <WhatsApp />
            </Fab>
            <Fab color="primary" href={'https://t.me/roajeremy'} target="_blank">
                <Telegram />
            </Fab>
            <Fab color="primary" href={'mailto:jmra0611@gmail.com'} target="_blank">
                <Email />
            </Fab>
        </div>
    )
}

export default SocialButtons
