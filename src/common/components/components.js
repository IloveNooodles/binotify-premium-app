import styled from 'styled-components'

export const BlurredBackgroundImage = styled('img')`
    z-index: -1;
    filter: blur(8px) brightness(0.6);
    -webkit-filter: blur(8px) brightness(0.6);
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: scale(1.04);
    position: fixed;
`