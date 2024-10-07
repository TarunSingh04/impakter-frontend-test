"use client";
import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import DragFile from "@/app/components/page-components/onboarding-questionaires/questionaire-content/drag-and-drop/Dragfile";

const Quizcontainer1 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [file, setFile] = useState<any>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const onFileChange = (files: any) => {
    console.log(files);
    setFile(files);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Your carbon footprint and sustainability certificates{" "}
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Have you obtained a measure of your GHG emissions (scope 1, 2) to
          assess the carbon footprint resulting from your activities?
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="ghgEmission"
            onChange={handleOptionChange}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="ghgEmission"
            onChange={handleOptionChange}
          />
          <span>
            {" "}
            No - in this case, you can obtain an estimate of your GHG emissions
            by using our PRO online carbon accounting app
          </span>
        </label>
        <div className={styles.addfile}>
          <p> Upload your GHG Emissions report here:</p>
          <DragFile onFileChange={(files) => onFileChange(files)} />
        </div>
        <div className={styles.InputWrap}>
          <p>Date Obtained:</p>
          <input type="text" placeholder="DD/MM/YYYY" />
        </div>
      </div>
    </>
  );
};

const Quizcontainer2 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Energy source: fossil fuels or green?
      </div>
      <div className={styles.InputSelectWrap}>
        <p>Do you have an energy utility provider?</p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"} // Controlled radio button
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If Yes, Please Indicate name.</p>
            <input type="text" />
          </div>
        )}
      </div>

      <div className={styles.InputSelectWrap}>
        <p> Do you use any renewable energy sources?</p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"} // Controlled radio button
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption2 === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>
              {" "}
              Please indicate your sources, click every box that applies and
              provide the percentage (%) of the total energy you received from
              that source:
            </p>
            <label>
              <input type="radio" value="solar panels" />
              <span>solar panels</span>
              <input type="text" placeholder="%" />
            </label>
            <br />
            <label>
              <input type="radio" value="wind power" />
              <span>wind power</span>
              <input type="text" placeholder="%" />
            </label>
            <br />
            <label>
              <input type="radio" value="biofuels " />
              <span>biofuels </span>
              <input type="text" placeholder="%" />
            </label>
            <br />
            <label>
              <input type="radio" value="hydropower" />
              <span>hydropower</span>
              <input type="text" placeholder="%" />
            </label>
            <br />
          </div>
        )}
      </div>
    </>
  );
};

const Quizcontainer3 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");

  const [selectedOption3, setSelectedOption3] = useState<string>("");
  const [selectedOption4, setSelectedOption4] = useState<string>("");
  const [selectedOption5, setSelectedOption5] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };
  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption3(event.target.value);
  };
  const handleOptionChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption4(event.target.value);
  };
  const handleOptionChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption5(event.target.value);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
      Energy efficiency: How to avoid costly waste in production or in provision of services and in operating infrastructure 
      </div>
      <div className={styles.InputSelectWrap}>
        <p> Have you obtained an EU energy efficiency label for any part or the whole of the products you provide and/or the infrastructure or properties you operate in: </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"} // Controlled radio button
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p> please indicate % of your total energy use covered by each label you have obtained: </p>
             <div className={styles.checkboxcoverage}>
               <h5>Covers less than 50%</h5>
               <label>
                  <input
                    type="radio"
                    value="A"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "A"} // Controlled radio button
                  />
                  <span>A</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="B"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "B"} // Controlled radio button
                  />
                  <span>B</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="C"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "C"} // Controlled radio button
                  />
                  <span>C</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="D"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "D"} // Controlled radio button
                  />
                  <span>D</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="E"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "E"} // Controlled radio button
                  />
                  <span>E</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="F"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "F"} // Controlled radio button
                  />
                  <span>F</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="G"
                    name="coverage1"
                    onChange={handleOptionChange3}
                    checked={selectedOption3 === "G"} // Controlled radio button
                  />
                  <span>G</span>
                </label>
             </div>
             <div className={styles.checkboxcoverage}>
               <h5>Covers from 50% to 80%:</h5>
               <label>
                  <input
                    type="radio"
                    value="A"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "A"} // Controlled radio button
                  />
                  <span>A</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="B"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "B"} // Controlled radio button
                  />
                  <span>B</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="C"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "C"} // Controlled radio button
                  />
                  <span>C</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="D"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "D"} // Controlled radio button
                  />
                  <span>D</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="E"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "E"} // Controlled radio button
                  />
                  <span>E</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="F"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "F"} // Controlled radio button
                  />
                  <span>F</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="G"
                    name="coverage2"
                    onChange={handleOptionChange4}
                    checked={selectedOption4 === "G"} // Controlled radio button
                  />
                  <span>G</span>
                </label>
             </div>
             <div className={styles.checkboxcoverage}>
               <h5>Covers over 80%: </h5>
               <div className={styles.inputcheckcover}>
               <label>
                  <input
                    type="radio"
                    value="A"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "A"} // Controlled radio button
                  />
                  <span>A</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="B"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "B"} // Controlled radio button
                  />
                  <span>B</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="C"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "C"} // Controlled radio button
                  />
                  <span>C</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="D"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "D"} // Controlled radio button
                  />
                  <span>D</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="E"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "E"} // Controlled radio button
                  />
                  <span>E</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="F"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "F"} // Controlled radio button
                  />
                  <span>F</span>
                </label>
                <label>
                  <input
                    type="radio"
                    value="G"
                    name="coverage3"
                    onChange={handleOptionChange5}
                    checked={selectedOption5 === "G"} // Controlled radio button
                  />
                  <span>G</span>
                </label>
               </div>
             </div>

          </div>
        )}
      </div>

      <div className={styles.InputSelectWrap}>
        <p>  If you haven’t yet obtained any label for energy efficiency or if you plan to improve your level of efficiency to obtain a higher label, will you carry out an energy audit and implement measures to improve energy efficiency within the next 24 months:             </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"} // Controlled radio button
          />
          <span>No</span>
        </label>
      </div>
    </>
  );
};


const Quizcontainer4 = () => {
  return <div>Quizcontent</div>;
};

const Quizcontainer5 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [wasteReductionMethods, setWasteReductionMethods] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };

  // Handle multiselect for waste reduction methods
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (wasteReductionMethods.includes(value)) {
      // If already selected, remove it
      setWasteReductionMethods(wasteReductionMethods.filter(method => method !== value));
    } else {
      // Otherwise, add it
      setWasteReductionMethods([...wasteReductionMethods, value]);
    }
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Waste management: Keeping products and materials in use longer, recycling for new products, converting into new energy 
      </div>
      <div className={styles.InputSelectWrap}>
        <p> Are you actively engaged in waste reduction:</p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"} // Controlled radio button
          />
          <span>No</span>
        </label>

        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p> Please indicate how you have achieved waste reduction (check all of the following methods you use):</p>
            <label>
              <input
                type="checkbox"
                value="product redesign for reuse/remanufacturing"
                onChange={handleCheckboxChange}
                checked={wasteReductionMethods.includes("product redesign for reuse/remanufacturing")}
              />
              <span>Product redesign for reuse/remanufacturing (i.e. closed loop system)</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="organic waste processed for composting"
                onChange={handleCheckboxChange}
                checked={wasteReductionMethods.includes("organic waste processed for composting")}
              />
              <span>Organic waste processed for composting</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="re-using construction debris for new products"
                onChange={handleCheckboxChange}
                checked={wasteReductionMethods.includes("re-using construction debris for new products")}
              />
              <span>Re-using construction debris for new products</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="using alternative materials for circularity"
                onChange={handleCheckboxChange}
                checked={wasteReductionMethods.includes("using alternative materials for circularity")}
              />
              <span>Using alternative materials, promoting recycling, and designing products for circularity</span>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="contributing organic waste for energy extraction"
                onChange={handleCheckboxChange}
                checked={wasteReductionMethods.includes("contributing organic waste for energy extraction")}
              />
              <span>Contributing your organic waste to a plant that extracts energy</span>
            </label>
          </div>
        )}
      </div>

      <div className={styles.InputSelectWrap}>
        <p> Partnerships for the circular economy: This involves collaborating with business partners or manufacturers to design products that are easier to disassemble, repair, and reuse, ensuring that second-hand merchandise is sellable and does not end up in landfills. Are you engaged in such partnerships:</p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"} // Controlled radio button
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption2 === "yes" && (
          <div className={styles.yesInputWrap}>
            <p> If desired, give one or more example(s) of successful partnership(s) you have achieved: </p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};


const Quizcontainer6 = () => {
  return (<div>Quizcontent</div>);
};


const Quizcontainer7 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const [selectedOption3, setSelectedOption3] = useState<string>("");
  const [selectedOption4, setSelectedOption4] = useState<string>("");
  const [selectedOption5, setSelectedOption5] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption3(event.target.value);
  };
  const handleOptionChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption4(event.target.value);
  };

  const handleOptionChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption5(event.target.value);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
      Work conditions: Flexibility, safety and health
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
        Flexible working time: Do you provide it: 
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"}
          />
          <span>No</span>
        </label>
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
        Safety and health measures:  do you have obtained a certificate to prove you have such measures in place to protect your employees:
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes,  please give name:</p>
            <input type="text" />
            <p>If yes,  please give number:</p>
            <input type="text" />
          </div>
        )}
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
        If you have no certificates or the certificates you hold are not either based on ISO 45001 or SO8000, do you have any safety and/or health measures in place for your employees? 
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider3"
            onChange={handleOptionChange3}
            checked={selectedOption3 === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider3"
            onChange={handleOptionChange3}
            checked={selectedOption3 === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption3 === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes,  briefly describe your employee safety and/or health measures: </p>
            <input type="text" />
          </div>
        )}
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
        Worker family health requirements (eg. for mothers and fathers at the moment of birth, care for the sickness of a close relative): Do you have measures in place to respond to the health needs of your employees or their immediate family (children or parent) that are additional to what is required by law in your country:    
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider4"
            onChange={handleOptionChange4}
            checked={selectedOption4 === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider4"
            onChange={handleOptionChange4}
            checked={selectedOption4 === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption4 === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes,  Explain briefly what measures:</p>
            <input type="text" />
          </div>
        )}
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
        Measures against violence and sexual harassment in the workplace: Have you put in place measures to address this issue that are additional to what is required by law in your country:      
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider5"
            onChange={handleOptionChange5}
            checked={selectedOption5 === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider5"
            onChange={handleOptionChange5}
            checked={selectedOption5 === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption5 === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes,   briefly describe the measures against violence and sexual harassment that you have in place:</p>
            <input type="text" />
          </div>
        )}
      </div>

    </>
  );
};
const Quizcontainer8 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Community engagement with business partners and customers
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Do you engage in Product Stewardship to promote the circular economy,
          such as, for example, participating in Extended Producer
          Responsibility (EPR) programmes (EPR means that producers are held to
          be financially responsible for the collection and recycling of their
          products at the end of their lifespan):{" "}
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider0"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider0"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption2 === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes, briefly indicate in what programme</p>
            <input type="text" />
          </div>
        )}
      </div>

      <div className={styles.InputSelectWrap}>
        <p>Do you participate in local community partnerships: </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>
              If yes, explain briefly your community activities, such as, for
              example, partnerships with food banks, local schools, shelters,
              green spaces, or participation in community events:{" "}
            </p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};
const Quizcontainer9 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={styles.questionsubHeader}>
        Transparency and anti-corruption:
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          {" "}
          Do you follow the ISO 37001 principles and criteria for anti-fraud and
          anti-money laundering activities and have you obtained certification
          demonstrating that you do so?{" "}
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>
              If yes, give name of the certification body that provided you with
              the certification and year obtained:
            </p>
            <p>Name:</p>
            <input type="text" />
            <p>Year:</p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};
const Quizcontainer10 = () => {
  const [selectedOption2, setSelectedOption2] = useState<string>("");
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Ethical fund-raising and charitable activities
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          {" "}
          Are you already following the general ethical principles set by
          organisations like the European Fundraising Association (EFA) that are
          focused on transparency, accountability, and fair tax treatment of
          charities?{" "}
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"}
          />
          <span>No</span>
        </label>
      </div>
    </>
  );
};
const Quizcontainer11 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={styles.questionsubHeader}>
        Carbon offset schemes and other compensation methods
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Do you offer to your customers a carbon credit or offset scheme or
          other form of compensation for CO2 emissions?{" "}
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>please indicate which scheme or compensation package you use:</p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};
const Quizcontainer12 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={styles.questionsubHeader}>
        Quality management and customer satisfaction
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Have you considered taking measures for improved quality management, a
          cornerstone of several aspects of sustainable management? (skip
          question if you hold ISO 9001 certification)
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes, describe briefly the measures taken</p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};
const Quizcontainer13 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className={styles.questionsubHeader}>Risk management</div>
      <div className={styles.InputSelectWrap}>
        <p>
          {" "}
          Have you considered taking measures for improved risk management, a
          cornerstone of several aspects of sustainable management? (skip
          question if you hold ISO 31000)
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes, describe briefly the measures taken</p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};
const Quizcontainer14 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOption2, setSelectedOption2] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Data security and privacy protection
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Have you achieved compliance with the General Data Protection
          Regulation (GDPR), a regulation enforced by the EU to ensure legal
          compliance with a focus on individual rights:{" "}
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "yes"} // Controlled radio button
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider2"
            onChange={handleOptionChange2}
            checked={selectedOption2 === "no"}
          />
          <span>No</span>
        </label>
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Have you taken measures to improve information security? (skip this
          question if you hold ISO 27001 certification)
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes, describe briefly the measures taken</p>
            <input type="text" />
          </div>
        )}
      </div>
    </>
  );
};

const Quizcontainer15 = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [documents, setDocuments] = useState([{ title: "", provider: "", regNumber: "" }]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  // Handle input change for document fields
  const handleDocumentChange = (index: number, field: string, value: string) => {
    const newDocuments = [...documents];
    newDocuments[index] = { ...newDocuments[index], [field]: value };
    setDocuments(newDocuments);
  };

  // Add a new document when "+" button is clicked
  const addDocument = () => {
    setDocuments([...documents, { title: "", provider: "", regNumber: "" }]);
  };

  return (
    <>
      <div className={styles.questionsubHeader}>
        Sector-specific Sustainability Certificates 
      </div>
      <div className={styles.InputSelectWrap}>
        <p>
          Do you hold any sector-specific or particular sustainability certificate in addition to the ones you have already indicated here?
        </p>
        <label>
          <input
            type="radio"
            value="yes"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "yes"}
          />
          <span>Yes</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="no"
            name="energyProvider"
            onChange={handleOptionChange}
            checked={selectedOption === "no"}
          />
          <span>No</span>
        </label>

        {/* Conditionally render the input if "Yes" is selected */}
        {selectedOption === "yes" && (
          <div className={styles.yesInputWrap}>
            <p>If yes, please indicate the following:</p>
            
            {/* Render the document input fields dynamically */}
            {documents.map((doc, index) => (
              <div key={index}>
                <p>Title of document</p>
                <input
                  type="text"
                  value={doc.title}
                  onChange={(e) => handleDocumentChange(index, "title", e.target.value)}
                />
                <p>Name of Provider</p>
                <input
                  type="text"
                  value={doc.provider}
                  onChange={(e) => handleDocumentChange(index, "provider", e.target.value)}
                />
                <p>Registration Number</p>
                <input
                  type="text"
                  value={doc.regNumber}
                  className={styles.lowerInputBox}
                  onChange={(e) => handleDocumentChange(index, "regNumber", e.target.value)}
                />
              </div>
            ))}

            {/* Button to add new document fields */}
            <button onClick={addDocument} className={styles.adddoc}>Add more documents +</button>
          </div>
        )}
      </div>
    </>
  );
};


interface QuizcontentProps {
  setQuiz: React.Dispatch<React.SetStateAction<boolean>>;
}

const Quizcontent: FC<QuizcontentProps> = ({ setQuiz }) => {
  const [quizNumber, setquizNumber] = useState(1);

  const nextQuestionaire = () => {
    setquizNumber(quizNumber + 1);
  };

  const previousQuestionaire = () => {
    setquizNumber(quizNumber - 1);
  };

  const submitQuestionaire = () => {
    setQuiz(false);
    console.log("questionaire submitted");
  };
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        {quizNumber < 6 && <h3>ENVIRONMENT</h3>}
        {quizNumber > 5 && quizNumber < 9 && <h3>SOCIAL</h3>}
        {quizNumber > 8 && quizNumber < 16 && <h3>GOVERNANCE </h3>}
        {quizNumber === 1 && <Quizcontainer1 />}
        {quizNumber === 2 && <Quizcontainer2 />}
        {quizNumber === 3 && <Quizcontainer3 />}
        {quizNumber === 4 && <Quizcontainer4 />}
        {quizNumber === 5 && <Quizcontainer5 />}
        {quizNumber === 6 && <Quizcontainer6 />}
        {quizNumber === 7 && <Quizcontainer7 />}
        {quizNumber === 8 && <Quizcontainer8 />}
        {quizNumber === 9 && <Quizcontainer9 />}
        {quizNumber === 10 && <Quizcontainer10 />}
        {quizNumber === 11 && <Quizcontainer11 />}
        {quizNumber === 12 && <Quizcontainer12 />}
        {quizNumber === 13 && <Quizcontainer13 />}
        {quizNumber === 14 && <Quizcontainer14 />}
        {quizNumber === 15 && <Quizcontainer15 />}

        {quizNumber !== 15 && (
          <div className={quizNumber === 1 ? styles.btnBox1 : styles.btnBox}>
            {quizNumber !== 1 && (
              <div className={styles.btnBox}>
                <button
                  className={styles.continuebtn}
                  onClick={previousQuestionaire}
                >
                  Back
                </button>
              </div>
            )}
            <button className={styles.continuebtn} onClick={nextQuestionaire}>
              Continue
            </button>
          </div>
        )}

        {quizNumber === 15 && (
          <div className={styles.btnBox}>
            <div className={styles.btnBox}>
              <button
                className={styles.continuebtn}
                onClick={previousQuestionaire}
              >
                Back
              </button>
            </div>
            <button className={styles.continuebtn} onClick={submitQuestionaire}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizcontent;
