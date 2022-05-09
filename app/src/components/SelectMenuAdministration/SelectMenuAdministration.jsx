import React, { useEffect } from 'react';
import './SelectMenuAdministration.css'

/*We made this adapting the "How to" from https://www.w3schools.com/howto/howto_custom_select.asp*/
function renderCustomSelect(props) {

    /* CUSTOM SELECT LOGIC */
    let x, i, j, l, ll, selElmnt, a, b, c;

    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-selects");
    l = x.length;

    const handleOnClick = (callback, clickValue) => {
        callback(clickValue);
    }

    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;

        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                //execute any function the original option has 
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        h.setAttribute("onClick", handleOnClick);
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                handleOnClick(props, h.innerText);
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);

    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

}

const SelectMenu = (props) => {
    const options = [...props.options.options];
    let value; 

    const onClick = (val) => {
        value = val.split(':')[0];
        props.handleOnClick(value)
    }

    useEffect(() => {
        renderCustomSelect(onClick);
    }, []);

    return (
        <div className="administration-name">

        <div className="custom-selects">
            <select required>
                <option value="default" defaultValue>{props.options.default}</option>
                {options.map(option => (
                    <option value={option.value} key={option.value}>{option.text}</option>
                ))}
            </select>
        </div >
        </div>
    )
}

export default SelectMenu;