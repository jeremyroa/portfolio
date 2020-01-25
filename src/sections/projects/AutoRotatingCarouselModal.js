import React from "react";
import { red, blue, green } from "@material-ui/core/colors";
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
        }
    },
}

const AutoRotatingCarouselCustom = withStyles(styles)(AutoRotatingCarousel);

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile, projects, currentProject }) => {
    const theme = useTheme();
    const { media, title, subtitle } = projects[currentProject];
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
                    <Slide
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
                        subtitle={subtitle}
                    />
                ))}
            </AutoRotatingCarouselCustom>
        </div>
    );
};

export default AutoRotatingCarouselModal
