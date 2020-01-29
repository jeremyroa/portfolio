import React from "react";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { useTheme, withStyles } from "@material-ui/core";

const styles = {
    root: {
        '& > .AutoRotatingCarousel-content-378': {
            "@media (min-width: 768px)": {
                maxHeight: '900px',
                maxWidth: '750px',
                width: '70%'
            },
        },
        '& .AutoRotatingCarousel-footerMobile-389' : {
            marginTop: '-70px'
        },
        '& .Slide-textMobile-540 .Slide-subtitle-525' : {
            maxHeight: '57px'  
        },
        '& .AutoRotatingCarousel-footerMobile-389 .MuiButton-contained' : {
            marginBottom: '-10px'
        }
    },
}

const stylesSlide = {
    root: {
        '& .MuiTypography-body1' : {
            maxHeight: '57px' , 
            overflow: 'hidden' , 
            "@media (min-width: 768px)": {
                maxHeight: 'auto',
            },
        },
    },
}

const AutoRotatingCarouselCustom = withStyles(styles)(AutoRotatingCarousel);
const SlideCustom = withStyles(stylesSlide)(Slide);

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile, projects, currentProject }) => {
    const theme = useTheme();
    const { media, title } = projects[currentProject];
    return (
        <div>
            <AutoRotatingCarouselCustom
                label="Cerrar"
                open={handleOpen.open}
                onClose={() => setHandleOpen({ open: false })}
                onStart={() => setHandleOpen({ open: false })}
                autoplay={false}
                mobile={isMobile}
                ModalProps={{
                    closeAfterTransition: true,
                }}

                style={{ position: "absolute" }}
            >
                {media.map(med => (
                    <SlideCustom
                        key={title + med.alt}
                        media={
                            <img alt={med.alt} style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }} src={med.img} />
                        }
                        mediaBackgroundStyle={{ backgroundColor: theme.palette.third.main, height: 'calc(100% - 200px)' }}
                        style={{ backgroundColor: '#1B242F' }}
                        title={title}
                        subtitle={med.subtitle}
                    />
                ))}
            </AutoRotatingCarouselCustom>
        </div>
    );
};

export default AutoRotatingCarouselModal
