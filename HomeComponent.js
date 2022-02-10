import React from "react";
import { Button } from "bootstrap";
const HomeComponent = () => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/asset/images/img4.webp"
              class="d-block w-100"
              alt="Hospital"
              height="700px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/asset/images/img2.jpg"
              class="d-block w-100"
              alt="Hospital"
              height="700px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/asset/images/img3.jpg"
              class="d-block w-100"
              alt="Hospital"
              height="700px"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container py-2">
          <div className="text-center">
            <h3>
              <strong>ABOUT US</strong>
            </h3>
          </div>
          <div class="site-section cta-big-image" id="about-section">
            <div class="container">
              <div class="row mb-5"></div>
              <div class="row">
                <div class="col-lg-6 mb-5">
                  <figure class="circle-bg">
                    <img
                      src="/asset/images/gambar1.jpg"
                      alt="Image"
                      class="img-fluid"
                      height="150px"
                    />
                  </figure>
                </div>
                <div class="col-lg-5 ml-auto">
                  <div class="mb-7">
                    <h3 class="h3 mb-10 text-black">
                      <center>
                        <strong>Rumah Sakit Wava Husada</strong>
                      </center>
                    </h3>
                    <p>
                      <center>
                        Rumah Sakit Wava Husada dahulu bernama “Jang Seng Ie”
                        didirikan pada tanggal 28 Desember 1924 oleh dr Kwa
                        Tjoan Sioe dan beberapa teman sejawat serta
                        pengusaha-pengusaha Tionghoa di Jakarta dalam wadah
                        perkumpulan “Jang Seng Ie” (sekarang menjadi Rumah Sakit
                        Wava Husada).
                      </center>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="site-section bg-light" id="pricing-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="pricing">
                <h4 class=" text-black">
                  Fasilitas & Layanan
                </h4>
                <img
                  src="/asset/images/gambar3.png"
                  class="d-block w-50 h-200"
                  alt="Hospital"
                />
                <h5 class=" text-black">
                  Fasilitas & Layanan di Rumah Sakit
                </h5>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="pricing">
                <h4 class=" text-black">Central Of Excellence</h4>
                <img
                  src="/asset/images/gambar4.png"
                  class="d-block w-50 h-200"
                  alt="Hospital"
                />
                 <h4 class=" text-black">Pusat Layanan</h4>
              </div>
            </div>
            <div class="col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="pricing">
                <h4 class=" text-black">Layanan Medical Check Up</h4>
                <img
                  src="/asset/images/gambar5.png"
                  class="d-block w-50 h-200"
                  alt="Hospital"
                />
               <h4 class=" text-black"> Paket MCU Terintegrasi</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
