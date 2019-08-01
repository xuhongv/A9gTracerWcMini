Page({
  data: {
    markers: [{
      iconPath: '../resource/location.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      label: {
        content: "A9g位置:腾讯微信总部",
        fontSize: 10,
        padding: 3,
        bgColor: "#00BFFF",
        borderRadius: 3,
        color: "#FFF",
      }

    }],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})