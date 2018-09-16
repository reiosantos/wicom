import React from 'react';

const Contact=()=>(
    <div className="contact">
    <h1>Contact us</h1>
    <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Uwa Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="info@ugandawildlife.org"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Plot 7 Kira Road, Kamwokya.
    P.O. BOX 3530, Kampala, Uganda"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">UWA Telephone</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="+256 414 355000, 
        +256 312 355000"/>
    </div>
  </div>
  </form>
        </div>
);
export default Contact;