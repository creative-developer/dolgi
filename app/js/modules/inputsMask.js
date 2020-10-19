export const inputsMaskInit = () => {
  // Phone input mask
  $('input[type="tel"]').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
  })
}
