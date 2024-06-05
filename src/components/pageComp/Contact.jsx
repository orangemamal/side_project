import React from 'react';

export default function Contact() {

  const infoItems = [
    {
      path: 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
      content: '43 Raymouth Rd. Baltemoer, London 3910'
    },
    {
      path: 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
      content: 'info@yourdomain.com'
    },
    {
      path: 'M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z',
      content: '+1 294 3925 3939'
    },
  ]

  return (
    <main>
      <div className="untree_co-section">
        <div className="container">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8 pb-4">
                <div className="row mb-5">

                  {infoItems.map((item, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="service no-shadow align-items-center link horizontal d-flex active"
                           data-aos="fade-left" data-aos-delay="0">
                        <div className="service-icon color-1 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d={`${item.path}`} />
                          </svg>
                        </div>
                        <div className="service-contents">
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>

                <div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="fname">First name</label>
                        <input type="text" className="form-control" id="fname" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="text-black" htmlFor="lname">Last name</label>
                        <input type="text" className="form-control" id="lname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-black" htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" />
                  </div>

                  <div className="form-group mb-5">
                    <label className="text-black" htmlFor="message">Message</label>
                    <textarea name="" className="form-control" id="message" cols="30" rows="5"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary-hover-outline">Send Message</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
