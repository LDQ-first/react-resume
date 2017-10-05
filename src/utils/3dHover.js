

export const moveFunc = (e) => {

    const b = document.body,
          _this = e.currentTarget,
          nameJob = document.querySelector('.name-job'),
          x = e.pageX - _this.getBoundingClientRect().left,
          y = e.pageY - _this.getBoundingClientRect().top - b.scrollTop,
          centerX = _this.offsetWidth / 2,
          centerY = _this.offsetHeight / 2,
          deltaX = x - centerX,
          deltaY = y - centerY,
          percentX = deltaX / centerX,
          percentY = deltaY / centerY,
          deg = 10

    /* _this.style.transform = `rotateX( ${deg} * -${percentY} deg) rotateY( ${deg} * ${percentX} deg)`*/
   _this.style.transform = 'rotateX(' + deg * -percentY + 'deg)' + 
        ' rotateY(' + deg * percentX + 'deg)'
   nameJob.style.transform = 'translate3d(' + deg * percentX + 'px,' + deg * percentY + 'px, 0px)'

}


export const leaveFunc = (e) => {
     const _this = e.currentTarget,
            nameJob = document.querySelector('.name-job')
    _this.style.transform = ''
    nameJob.style.transform = ''
}