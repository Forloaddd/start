// alerts alert-code -------- show-alert ids

function FocusIn() {
    // focus search input
    document.getElementById('search-input').focus()
}

// find if not got admited characters
function ComplexCar(a) {
    if (a.indexOf("#") > -1 || a.indexOf("&") > -1) {
        document.getElementById('alert-code').innerHTML = error1characters
        document.getElementById('show-alert').click()
        return false
    } else {
        return true
    }
}

var lang

// special finds
function SpecialFinds(o, nw) {
    let i = o // toLowerCase()
    // translator
    if (i.startsWith('t ')) {
        if (ComplexCar(o)) {
            let val = o.slice(2, Infinity)
            if (nw == true) {
                window.open("https://translate.google.cl/?hl=es&sl=auto&tl=" + lang +"&text=" + val, '_blank').focus()
            } else {
                window.location.assign("https://translate.google.cl/?hl=es&sl=auto&tl=" + lang +"&text=" + val)
            }
        }
        return false
    }
    // wikipedia
    else if (i.startsWith('w ')) {
        if (ComplexCar(o)) {
            let val = o.slice(2, Infinity)
            if (nw == true) {
                window.open("https://es.wikipedia.org/wiki/" + val, '_blank').focus()
            } else {
                window.location.assign("https://es.wikipedia.org/wiki/" + val)
            }
        }
        return false
    }
    // youtube
    else if (i.startsWith('y ')) {
        if (ComplexCar(o)) {
            let val = o.slice(2, Infinity)
            if (nw == true) {
                window.open("https://www.youtube.com/results?search_query=" + val, '_blank').focus()
            } else {
                window.location.assign("https://www.youtube.com/results?search_query=" + val)
            }
        }
        return false
    }
    // spotify
    else if (i.startsWith('s ')) {
        if (ComplexCar(o)) {
            let val = o.slice(2, Infinity)
            if (nw == true) {
                window.open("https://open.spotify.com/search/" + val, '_blank').focus()
            } else {
                window.location.assign("https://open.spotify.com/search/" + val)
            }
        }
        return false
    } else {
        return true
    }
}

// tipical search
function search() {

    invalue = document.getElementById("search-input").value.toLowerCase()

    if (ComplexCar(invalue)) {

        if (document.getElementById("engine-qwant")) {
            SearchEngine = "https://www.qwant.com/?q=";
        } else if (document.getElementById("engine-google")) {
            SearchEngine = "https://www.google.com/search?q=";
        }

        if (invalue.endsWith(".com")) {
            if (!invalue.startsWith("https://") || !invalue.startsWith("http://")) {
                window.location.assign("http://" + invalue)
            } else {
                window.location.assign(invalue)
            }
        } else if (invalue.endsWith(".org")) {
            if (!invalue.startsWith("www.")) {
                window.location.assign("https://www." + invalue)
            } else {
                window.location.assign(invalue)
            }
        } else if (invalue.startsWith('www.')) {
            window.location.assign(invalue)
        } else if (invalue == "") {} else {
            let search = new String(SearchEngine + invalue)
            window.location.assign(search)
        }
    }

}

// search in other tab
function searchNW() {

    invalue = document.getElementById("search-input").value

    if (ComplexCar(invalue)) {

        if (document.getElementById("engine-qwant")) {
            SearchEngine = "https://www.qwant.com/?q=";
        } else if (document.getElementById("engine-google")) {
            SearchEngine = "https://www.google.com/search?q="
        }

        if (invalue.endsWith(".com")) {

            window.open("http://www." + invalue, '_blank').focus()
        } else if (invalue.endsWith(".org")) {
            window.open("http://www." + invalue, '_blank').focus()
        } else if (invalue == "") {} else {

            window.open(SearchEngine + invalue, '_blank').focus()
        }

    }

}

function newwindow() {
    invalue = document.getElementById("search-input").value

    if ($('#openNWI').prop('checked')) {
        if (SpecialFinds(invalue, true)) {
            searchNW()
        }

    } else {
        if (SpecialFinds(invalue, false)) {
            search()
        }
    }
}

$('#search-input').keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault()
        newwindow()
    }
})