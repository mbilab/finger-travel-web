import '!file-loader?name=index.html!extract-loader!html-loader!pug-html-loader!./index.pug'
import 'semantic-ui-offline/semantic.css'
import './app.sass'
window.$ = window.jQuery = require('jquery')
require('semantic-ui-offline/semantic.js')

$(document).ready(() => {
  const getInfo = () => {
    if (typeof AndroidInterface === 'undefined') return
    const info = AndroidInterface.getInfo()
    if (info === undefined) return

    const obj = JSON.parse(info)

    $('#totalHr' ).text(obj['time']['total'  ]['hr' ])
    $('#totalMin').text(obj['time']['total'  ]['min'])
    $('#totalSec').text(obj['time']['total'  ]['sec'])
    $('#fbHr'    ).text(obj['time']['fb'     ]['hr' ])
    $('#fbMin'   ).text(obj['time']['fb'     ]['min'])
    $('#fbSec'   ).text(obj['time']['fb'     ]['sec'])
    $('#igHr'    ).text(obj['time']['ig'     ]['hr' ])
    $('#igMin'   ).text(obj['time']['ig'     ]['min'])
    $('#igSec'   ).text(obj['time']['ig'     ]['sec'])
    $('#lineHr'  ).text(obj['time']['line'   ]['hr' ])
    $('#lineMin' ).text(obj['time']['line'   ]['min'])
    $('#lineSec' ).text(obj['time']['line'   ]['sec'])
    $('#ytHr'    ).text(obj['time']['youtube']['hr' ])
    $('#ytMin'   ).text(obj['time']['youtube']['min'])
    $('#ytSec'   ).text(obj['time']['youtube']['sec'])

    $('#totalKm' ).text(obj['dist']['total'  ]['km'])
    $('#totalM'  ).text(obj['dist']['total'  ]['m' ])
    $('#totalCm' ).text(obj['dist']['total'  ]['cm'])
    $('#fbKm'    ).text(obj['dist']['fb'     ]['km'])
    $('#fbM'     ).text(obj['dist']['fb'     ]['m' ])
    $('#fbCm'    ).text(obj['dist']['fb'     ]['cm'])
    $('#igKm'    ).text(obj['dist']['ig'     ]['km'])
    $('#igM'     ).text(obj['dist']['ig'     ]['m' ])
    $('#igCm'    ).text(obj['dist']['ig'     ]['cm'])
    $('#lineKm'  ).text(obj['dist']['line'   ]['km'])
    $('#lineM'   ).text(obj['dist']['line'   ]['m' ])
    $('#lineCm'  ).text(obj['dist']['line'   ]['cm'])
    $('#ytKm'    ).text(obj['dist']['youtube']['km'])
    $('#ytM'     ).text(obj['dist']['youtube']['m' ])
    $('#ytCm'    ).text(obj['dist']['youtube']['cm'])
  }
  setInterval(getInfo, 1000)

  let flag = false
  $('#startBtn').click(() => {
    console.log('click')
    flag = !flag
    if (flag)
      $('#startBtn').addClass('loading')
    else
      $('#startBtn').removeClass('loading')
    if (typeof AndroidInterface === 'undefined') return
    AndroidInterface.StartService(flag)
  })

})
