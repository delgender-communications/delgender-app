import { useEffect, useState } from "react";
import "./AppointmentForm.css";
import { useForm, ValidationError } from "@formspree/react";
import { FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import industries from "../data/industries";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "";

const needsOptions = [
  "Business Strategy & Growth",
  "Problem Diagnosis & Solutions",
  "Operations & Systems",
  "Marketing & Branding",
  "Team & HR Structure",
  "Funding / Sponsorship Proposals",
];

const timeSlots = [
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

type AppointmentFormProps = {
  onClose: () => void;
};

const AppointmentForm = ({ onClose }: AppointmentFormProps) => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 250);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 10);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`appt-overlay ${show ? "show" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`appt-popup ${show ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="appt-close-btn"
          onClick={handleClose}
          aria-label="Close"
          type="button"
        >
          <FiX size={22} />
        </button>

        <span className="section-label">Get started</span>
        <h2>Book a Consultation</h2>
        <p className="appt-subtitle">
          Book a consultation to discuss how we can help your business grow.
        </p>

        {state.succeeded ? (
          <div className="appt-message appt-success">
            <FiCheckCircle size={32} />
            <p>Your request has been sent. We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="appt-section-heading">Contact Information</p>

            <label htmlFor="name">
              Full name
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <div className="appt-row">
              <label htmlFor="jobTitle">
                Job title
                <input
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  placeholder="Optional"
                />
              </label>
              <label htmlFor="company">
                Company name
                <input
                  id="company"
                  type="text"
                  name="company"
                  required
                  placeholder="Your company name"
                />
              </label>
            </div>

            <div className="appt-row">
              <label htmlFor="phone">
                Phone number
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +27..."
                />
              </label>
              <label htmlFor="email">
                Email address
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                />
              </label>
            </div>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <p className="appt-section-heading">About Your Business</p>

            <label htmlFor="industry">
              Industry
              <select id="industry" name="industry" defaultValue="">
                <option value="" disabled>
                  Select an industry
                </option>
                {industries.map((industry) => (
                  <option key={industry}>{industry}</option>
                ))}
              </select>
            </label>

            <p className="appt-section-heading">Consultation Details</p>

            <span className="appt-fieldset-label">
              What do you need help with?
            </span>
            <div className="appt-checkbox-group">
              {needsOptions.map((option) => (
                <label key={option} className="appt-checkbox">
                  <input type="checkbox" name="needs" value={option} />
                  {option}
                </label>
              ))}
              <label className="appt-checkbox appt-checkbox-other">
                <input type="checkbox" name="needs" value="Other" />
                Other:
                <input
                  type="text"
                  name="needsOther"
                  className="appt-inline-input"
                  placeholder="Please specify"
                />
              </label>
            </div>

            <label htmlFor="challenge">
              Briefly describe your main challenge
              <textarea
                id="challenge"
                name="challenge"
                required
                maxLength={250}
                placeholder="What's holding your company back right now?"
              />
            </label>

            <label htmlFor="outcome">
              What outcome do you want from this session?
              <textarea
                id="outcome"
                name="outcome"
                placeholder="By the end, I would like to..."
              />
            </label>

            <p className="appt-section-heading">Booking Preference</p>

            <span className="appt-fieldset-label">Preferred meeting type</span>
            <div className="appt-radio-group">
              <label className="appt-radio">
                <input
                  type="radio"
                  name="meetingType"
                  value="In-person"
                  required
                />
                In-person
              </label>
              <label className="appt-radio">
                <input
                  type="radio"
                  name="meetingType"
                  value="Online Video Call"
                  required
                />
                Online Video Call
              </label>
              <label className="appt-radio">
                <input
                  type="radio"
                  name="meetingType"
                  value="Phone Call"
                  required
                />
                Phone Call
              </label>
            </div>

            <div className="appt-row">
              <label htmlFor="date">
                Preferred date
                <input id="date" type="date" name="date" required />
              </label>
              <label htmlFor="time">
                Preferred time
                <select id="time" name="time" required defaultValue="">
                  <option value="" disabled>
                    Select a time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot}>{slot}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="appt-checkbox appt-consent">
              <input type="checkbox" name="consent" required />I agree to be
              contacted regarding this booking
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="appt-submit-btn"
            >
              {state.submitting ? "Sending..." : "Book My Consultation"}
            </button>
            <p className="appt-fine-print">
              We will confirm your appointment within 24 hours via email/SMS.
            </p>
          </form>
        )}

        {!state.succeeded && state.errors && (
          <div className="appt-message appt-error">
            <FiAlertCircle size={22} />
            <p>Something went wrong. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
