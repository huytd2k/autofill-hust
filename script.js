const eles = Array.from(document.getElementsByClassName("dxeIRadioButton_Mulberry"));
eles.forEach(
    (ele, index) => {
        if(index%5 == 4) ele.click();
    }
)
const sub = document.getElementsByClassName("LoginButton");

sub[0].click();
