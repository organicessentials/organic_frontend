import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import config from "../../config";
import { decodeToken } from "react-jwt";


const Billing = () => {
  const { id } = useParams();
  const { user:item } = useSelector((state) => state.user);
  let user = decodeToken(item)
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const [countryId, setCountryId] = useState("");
  const [data, setData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://api.countrystatecity.in/v1/countries",
      headers: {
        "X-CSCAPI-KEY":
          "S2x4aDdlaU1wTmdXTDRabm9qTTlaanI5M0M5S0ZXRjZ3WHdUQUdnSA==",
      },
      withCredentials: false,
    };
    axios(config)
      .then(function (response) {
        setSelectedCountry(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getdata = async () => {
      if (data) {
        const result = await axios.get(
          `https://api.countrystatecity.in/v1/countries/${countryId}/states`,
          {
            headers: {
              "X-CSCAPI-KEY":
                "S2x4aDdlaU1wTmdXTDRabm9qTTlaanI5M0M5S0ZXRjZ3WHdUQUdnSA==",
            },
            withCredentials: false,
          }
        );
        setSelectedState(result.data);
      }
    };
    getdata();
  }, [countryId]);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const res = await axios.get(
          `${config}/api/auth/${id}/${user?.id}`
        );
        setData(res.data);
      } catch (error) {}
    };
    getAddress();
  }, [user.id, id]);

  const onSubmit = async () => {
    let dataToSend = {
      apartment: data.apartment,
      city: data.city,
      companyName: data.companyName,
      country: data.country.name,
      createdAt: data.createdAt,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      note: data.note,
      phone: data.phone,
      state: data.state.name,
      street: data.street,
      updatedAt: data.updatedAt,
      userId: data.userId,
      zipCode: data.zipCode,
      _id: data._id,
    };
    if (id == "billing") {
      const res = await axios.post(
        `${config}/api/auth/${id}/${user.id}`,
        dataToSend,
      );
      console.log(res);
    }
    if (id === "shipping") {
      const res = await axios.post(
        `${config}/api/auth/${id}/${user.id}`,
        dataToSend
      );
      console.log(res);
    }
  };

  return (
    <div>
      <div className="my_account">
      <div className="container_sec">
        <div className="row_account">
          <div className="col-lg-4">
            <Dashboard />
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="div">
                <h3>Shipping address</h3>
                <div className="fi_la_name">
                  <div className="firt-n with_check">
                    <label htmlFor="">First Name *</label>
                    <br />
                    <input
                      value={data?.firstName}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                  <div className="firt-n with_check">
                    <label htmlFor="">Last Name *</label>
                    <br />
                    <input
                      value={data?.lastName}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                      className="billing_input"
                    />
                  </div>
                </div>
                <div className="with_check"> 
                <label htmlFor="">Company Name (optional)</label>
                <input
                  value={data?.companyName}
                  onChange={(e) =>
                    setData({ ...data, companyName: e.target.value })
                  }
                  className="billing_input"
                />
                </div>
                <div className="with_check"> 
                <label htmlFor="">Country / Region *</label>
                <select
                      onChange={(e) => {
                        const selectedOption = JSON.parse(e.target.value);
                        setData({
                          ...data,
                          country: selectedOption.name,
                        });
                        setCountryId(selectedOption.id);
                      }}
                    >
                      <option>Select Country</option>
                      {selectedCountry.map((doc) => (
                        <option
                          key={doc.id}
                          value={JSON.stringify({ id: doc.id, name: doc.name })}
                        >
                          {doc.name}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="with_check"> 
                <label htmlFor="">Street address *</label>
                <input
                  value={data?.street}
                  onChange={(e) => setData({ ...data, street: e.target.value })}
                  className="billing_input"
                />
                </div> 
                <div className="with_check"> 
                <label htmlFor="">
                  Apartment, Suite, Unit, etc. (optional)
                </label>
                <input
                  value={data?.apartment}
                  onChange={(e) =>
                    setData({ ...data, apartment: e.target.value })
                  }
                  className="billing_input"
                />
                </div>
                 <div className="with_check"> 
                <label htmlFor="">Town / City *</label>
                <input
                  value={data?.city}
                  onChange={(e) => setData({ ...data, city: e.target.value })}
                  className="billing_input"
                />
                </div>
                <div className="with_check"> 
                <label htmlFor="">State / County *</label>
                <select
                      onChange={(e) =>
                        setData({ ...data, state: e.target.value })
                      }
                    >
                      <option>Select State</option>
                      {selectedState.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="with_check"> 
                <label htmlFor="">Postcode / ZIP *</label>
                <input
                  value={data?.zipCode}
                  onChange={(e) =>
                    setData({ ...data, zipCode: e.target.value })
                  }
                  className="billing_input"
                />
                </div>
                <button
                  type="submit"
                  className="addres_s"
                >
                  Save address
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
