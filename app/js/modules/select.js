import { validator } from './validation'

export const customSelectInit = () => {
  const arrow =
    '<svg class="icon icon--arrow-down"><use xlink:href="img/svg-sprite.svg#arrow-down"></use></svg>'
  const selectInit = () => {
    $('select').styler({
      selectSearch: true,
      selectSearchLimit: 6,
      selectPlaceholder: 'Выберите регион',
      selectSmartPositioning: false,
      onSelectOpened: function () {
        $(this).find('.jq-selectbox__search input').focus()
      },
      onSelectClosed: function () {
        // $(this).find('.jq-selectbox__search input').focus()
        validator.element('select')
      },
      onFormStyled: function () {
        $('.jq-selectbox__select .jq-selectbox__trigger').html(arrow)
      },
    })
  }
  $('.select-wrap__label').click(() => {
    selectInit()
  })
  selectInit()
}
