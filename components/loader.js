const template = `
    <div class="container">
        <div class="row ">
            <div class="d-flex justify-content-center text-centera">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <strong class="loadingText">Loading...</strong>
            </div>
        </div>
    </div>
`

export default {
  template,
  mounted () {
    console.log('Loader component mounted.')
  }
}
