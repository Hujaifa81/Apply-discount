function textValue(textId){
    const text=document.querySelector(textId)
   
    
    return text;
    
}
function parseValue(textValue){
    const text=textValue.innerText
    const numberValue=parseFloat(text)
    return numberValue

}
function discountCalculation(price)
{
    const discount=price*0.30
    const finalPrice=price-discount
    return finalPrice
}
function setPrice(id,finalValue)
{
    const getId=textValue(id)
    getId.innerText=finalValue
}

document.querySelector('#btn').addEventListener('click',function(event){
    
    const Tex=textValue('#price')
    const ParseVal=parseValue(Tex)
    const DiscountCalc=discountCalculation(ParseVal)
    const hide=textValue('#discount')
    hide.classList.remove('hidden')
    const SetPri=setPrice('#final',DiscountCalc)
})