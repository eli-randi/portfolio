import { useForm, ValidationError } from "@formspree/react";
import React, { useRef, useState, useEffect, FormEvent } from "react";
import Lottie from 'lottie-react'

import SendEmailLottie from '../../Assets/SendEmailLottie.json'

import './Form.css'

const useMountTransition : (isMounted: boolean, unmountDelay: number) => boolean = (isMounted, unmountDelay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId : NodeJS.Timeout;
    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};


export const ContactForm : React.FC = () => {
  const lottieRef : React.MutableRefObject<any | null> = useRef();
  const [state, handleFormSubmit] = useForm("xrgdbqon");
  const hasTransitionedQuestions = useMountTransition(!state.succeeded, 1000);
  const hasTransitionedCompleted = useMountTransition(state.succeeded, 1000);

  const handleSubmit : (e: FormEvent) => void = (e) => {
    handleFormSubmit(e)
  }

  if (state.succeeded) {
    lottieRef.current.play()
  }

  return (
    <form
      name="simple-contact-form"
      method="POST"
      onSubmit={handleSubmit}>
      <div className="Form-Page">
        {
          (!state.succeeded || hasTransitionedQuestions) && (
            <div className={`FormQuestions ${hasTransitionedQuestions && "in"} ${!state.succeeded && "visible"}`}>
              <div className="FormInput Name">
                <label htmlFor="Name">
                  Your name:
                </label>
                <input
                  placeholder="Steve 'The Hair' Harrington"
                  id="name"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="FormInput Email">
                <label htmlFor="email">
                  Email Address:
                </label>
                <input
                  placeholder="steve@netflix.com"
                  id="email"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="FormInput Message">
                <label>
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi Elisa, I have seen some Strange Things, but your portfolio is not one of them."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
          )
        }
        {(state.succeeded || hasTransitionedCompleted) && (
          <div className={`Succeeded ${hasTransitionedCompleted && "in"} ${state.succeeded && "visible"}`}>
            <p>Thank you for reaching out!</p>
          </div>
        )
        }
        <div className="FormSubmit">
          <button type="submit">
            <Lottie
              lottieRef={lottieRef}
              animationData={SendEmailLottie}
              autoplay={false}
              loop={false}
              style={{ height: '100px' }} />
          </button>
        </div>
      </div>
    </form>
  );
}