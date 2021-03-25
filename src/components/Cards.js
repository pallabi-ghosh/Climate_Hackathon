import React, { useState } from "react";
import "./Cards.css";
import { Button } from "./Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Cards() {
  const [nextCard, setNextCard] = useState(false);
  return (
    <div className="cards">
      <h1>Focus Group Discussion!</h1>
      <ol class="faq-list" data-aos="fade-up" data-aos-delay="100">
        <h2>Instruction for the interviewer</h2>
        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq2"
            class="collapsed question"
          >
            Thank the informants for participating in interview.
          </div>
        </li>

        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq3"
            class="collapsed question"
          >
            Explain the objectives and expectations of the interview.
          </div>
        </li>

        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq4"
            class="collapsed question"
          >
            Outline the session and the amount of time the interview will take.
          </div>
        </li>

        <li>
          <div
            data-bs-toggle="collapse"
            href="#faq5"
            class="collapsed question"
          >
            Obtain informed consent to record the interview and/or take
            pictures.
          </div>
        </li>
      </ol>
      <hr></hr>
      <div>
        <h2>Please fill out the form</h2>
      </div>
      <div className="container translate-btn" data-aos="fade-up">
        <Button
          className="btn"
          buttonStyle="btn-outline"
          buttonSize="btn--small"
        >
          Translate
        </Button>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <section id="faq" class="faq section-bg">
              {!nextCard ? (
                <div>
                  <div class="section-title">
                    <h2>Basic information</h2>
                  </div>
                  <ul class="faq-list" data-aos="fade-up" data-aos-delay="100">
                    <li>
                      <div className="collapsed question" href="#faq1">
                        <label htmlFor="name">Name (optional):</label>
                        <input type="text" placeholder="Your name..." />
                      </div>
                      <div className="collapsed question" href="#faq1">
                        <span>Geographic Location:</span>
                        <select name="country" id="country">
                          <option value="">Select your country</option>
                          <option value="dk">Denmark</option>
                          <option value="se">Sweden</option>
                          <option value="no">Norway</option>
                          <option value="fi">Finland</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                  <ul
                    className="faq-list"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <li>
                      <div className="collapsed question" href="#faq1">
                        <label htmlFor="date">Interview date:</label>
                        <DatePicker
                          required
                          name="deadline"
                          minDate={new Date()}
                          placeholderText="Pick a date"
                        />
                      </div>
                      <div className="collapsed question" href="#faq1">
                        <label htmlFor="place">Place of interview:</label>
                        <input
                          type="text"
                          placeholder="Place of interview..."
                        />
                      </div>
                    </li>
                  </ul>
                  <ul
                    className="faq-list"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <li>
                      <div className="collapsed question" href="#faq1">
                        <span>Gender:</span>
                        <label for="male">Male</label>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label for="female">Male</label>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label for="other">Other</label>
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="other"
                        />
                      </div>
                      <div class="collapsed question" href="#faq1">
                        <label htmlFor="age">Age:</label>
                        <input type="number" min="0" />
                      </div>
                      <div class="collapsed question" href="#faq1">
                        <span>Translation necessary for the interview:</span>
                        <label for="yes">Yes</label>
                        <input
                          type="radio"
                          id="yes"
                          name="translation"
                          value="yes"
                        />
                        <label for="no">No</label>
                        <input
                          type="radio"
                          id="no"
                          name="translation"
                          value="no"
                        />
                      </div>
                    </li>
                  </ul>

                  <div class="container" data-aos="fade-up">
                    <div class="section-title">
                      <h2>Discussion Questions</h2>
                    </div>

                    <ul
                      class="faq-list"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <li>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <p>
                            What are the main differences in your roles and
                            responsibilities now, compared to before the crisis?
                          </p>
                        </div>
                        <div className="input-areas">
                          <input
                            type="text"
                            // className="body-input"
                            name="answers"
                            placeholder="Your answer here..."
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="container" data-aos="fade-up">
                    <div class="section-title">
                      <h2>Access to Resources</h2>
                    </div>

                    <ul
                      class="faq-list"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <p>Resources : Yes or No</p>
                      <li>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <span>Water: </span>
                          <label for="yes">Yes</label>
                          <input
                            type="radio"
                            id="yes"
                            name="water"
                            value="yes"
                          />
                          <label for="no">No</label>
                          <input type="radio" id="no" name="water" value="no" />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <span>Food: </span>
                          <label for="yes">Yes</label>
                          <input
                            type="radio"
                            id="yes"
                            name="food"
                            value="yes"
                          />
                          <label for="no">No</label>
                          <input type="radio" id="no" name="food" value="no" />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <span>Clothes: </span>
                          <label for="yes">Yes</label>
                          <input
                            type="radio"
                            id="yes"
                            name="clothes"
                            value="yes"
                          />
                          <label for="no">No</label>
                          <input
                            type="radio"
                            id="no"
                            name="clothes"
                            value="no"
                          />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <span>NFI Distributions: </span>
                          <label for="yes">Yes</label>
                          <input type="radio" id="yes" name="nfi" value="yes" />
                          <label for="no">No</label>
                          <input type="radio" id="no" name="nfi" value="no" />
                        </div>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <span>Health Services: </span>
                          <label for="yes">Yes</label>
                          <input
                            type="radio"
                            id="yes"
                            name="health"
                            value="yes"
                          />
                          <label for="no">No</label>
                          <input
                            type="radio"
                            id="no"
                            name="health"
                            value="no"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setNextCard(true)}>Next page</button>
                </div>
              ) : (
                <div>
                  <div class="container" data-aos="fade-up">
                    <div class="section-title">
                      <h2>Additional Questions</h2>
                    </div>

                    <ul
                      class="faq-list"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <li>
                        <div
                          data-bs-toggle="collapse"
                          class="collapsed question"
                          href="#faq1"
                        >
                          <p>
                            {" "}
                            How are food items and non-food items accessed and
                            controlled?{" "}
                          </p>
                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq2"
                          class="collapsed question"
                        >
                          <p>
                            What has changed since the crisis happened?{" "}
                            <i class="bi bi-chevron-down icon-show"></i>
                            <i class="bi bi-chevron-up icon-close"></i>
                          </p>

                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq3"
                          class="collapsed question"
                        >
                          <p>
                            What are the primary needs?{" "}
                            <i class="bi bi-chevron-down icon-show"></i>
                            <i class="bi bi-chevron-up icon-close"></i>
                          </p>
                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq4"
                          class="collapsed question"
                        >
                          <p>
                            What are the different vulnerabilities?{" "}
                            <i class="bi bi-chevron-down icon-show"></i>
                            <i class="bi bi-chevron-up icon-close"></i>
                          </p>

                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq5"
                          class="collapsed question"
                        >
                          <p>
                            What are yours different skills and capacities?
                            <i class="bi bi-chevron-down icon-show"></i>
                            <i class="bi bi-chevron-up icon-close"></i>
                          </p>
                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>

                      <li>
                        <div
                          data-bs-toggle="collapse"
                          href="#faq6"
                          class="collapsed question"
                        >
                          <p>
                            What resources or support are they relying on? How
                            can CARE programme interventions best support these
                            mechanisms?{" "}
                            <i class="bi bi-chevron-down icon-show"></i>
                            <i class="bi bi-chevron-up icon-close"></i>
                          </p>

                          <div className="input-areas">
                            <input
                              type="text"
                              // className="body-input"
                              name="answers"
                              placeholder="Your answer here..."
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button onClick={() => setNextCard(false)}>Go back</button>
                </div>
              )}
            </section>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
