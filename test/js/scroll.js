import LocomotiveScroll from 'locomotive-scroll';

const lscroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    reloadOnContextChange: true,
    intertia: .4
});

export {lscroll};