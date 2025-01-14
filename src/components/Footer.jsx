
const Footer = () => {
  return (
    <footer class="text-center text-lg-start text-muted bg-secondary mt-3">
    <section class="">
      <div class="container text-center text-md-start pt-4 pb-4">
        <div class="row mt-3">
          <div class="col-12 col-lg-3 col-sm-12 mb-2">
            <a href="https://mdbootstrap.com/" target="_blank" class="text-white h2">
            </a>
            <p class="mt-1 text-white">
            </p>
          </div>
  
          <div class="col-6 col-sm-4 col-lg-2">
            <h6 class="text-uppercase text-white fw-bold mb-2">
              Store
            </h6>
            <ul class="list-unstyled mb-4 ">
              <li><a class="text-white-50 text-decoration-none" href="#">About us</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Find store</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Categories</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Blogs</a></li>
            </ul>
          </div>
  
          <div class="col-6 col-sm-4 col-lg-2">
            <h6 class="text-uppercase text-white fw-bold mb-2">
              Information
            </h6>
            <ul class="list-unstyled mb-4">
              <li><a class="text-white-50 text-decoration-none" href="#">Help center</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Money refund</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Shipping info</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Refunds</a></li>
            </ul>
          </div>
  
          <div class="col-6 col-sm-4 col-lg-2">
            <h6 class="text-uppercase text-white fw-bold mb-2">
              Support
            </h6>
            <ul class="list-unstyled mb-4">
              <li><a class="text-white-50 text-decoration-none" href="#">Help center</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Documents</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">Account restore</a></li>
              <li><a class="text-white-50 text-decoration-none" href="#">My orders</a></li>
            </ul>
          </div>
  
          <div class="col-12 col-sm-12 col-lg-3">
            <h6 class="text-uppercase text-white fw-bold mb-2">Newsletter</h6>
            <p class="text-white">Stay in touch with latest updates about our products and offers</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
              <button class="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <div class="">
      <div class="container">
        <div class="d-flex justify-content-between py-4 border-top">
          <div>
            <i class="fab fa-lg fa-cc-visa  text-white"></i>
            <i class="fab fa-lg fa-cc-amex ms-2 text-white"></i>
            <i class="fab fa-lg fa-cc-mastercard ms-2 text-white"></i>
            <i class="fab fa-lg fa-cc-paypal ms-2 text-white"></i>
          </div>
  
          <div class="dropdown dropup">
            <a class="dropdown-toggle text-white" href="#" id="Dropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false"> <i class="flag-united-kingdom flag m-0 me-1"></i>English </a>
  
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="Dropdown">
              <li>
                <a class="dropdown-item" href="#"><i class="flag-united-kingdom flag"></i>English <i class="fa fa-check text-success ms-2"></i></a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
