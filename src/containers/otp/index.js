import React, { useCallback, useState } from "react";
import { Formik } from "formik";
import { string, object } from "yup";

import OtpInput from "components/otpInput";
import { Button } from "components/button/styles";
import Heading1 from "components/shared/h1";

import { Form, LeadText, Container } from "./styles";
import api from "api";

const INITIAL_VALUES = {
  otp: ""
};

const VALIDATION_SCHEMA = object().shape({
  otp: string()
    .length(4)
    .required()
    .label("Code")
});

const OtpContainer = ({ otpSubmitData }) => {
  const [loading, setLoading] = useState(false);
  const { person, walletId } = otpSubmitData;
  const onSubmitHandler = useCallback(
    async ({ otp }) => {
      setLoading(true);
      try {
        await api.auth.confirmOtp({
          walletId,
          otp,
          person: {
            ...person,
            photo: person.photo.split(",")[1]
          }
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    [person, walletId]
  );

  const resendOtp = useCallback(async () => {
    setLoading(true);
    try {
      await api.auth.resendOtp({ walletId, mobileNumber: person.mobileNumber });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [person.mobileNumber, walletId]);

  return (
    <Container>
      <Heading1>Verification code</Heading1>
      <LeadText>
        Please enter the verification
        <br /> code sent to <strong>{person.mobileNumber}</strong>
      </LeadText>
      <Formik
        validationSchema={VALIDATION_SCHEMA}
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <OtpInput name="otp" />
            <Button
              type="button"
              disabled={loading}
              onClick={resendOtp}
              variant="secondary"
            >
              Resend OTP
            </Button>
            <Button disabled={loading} onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default OtpContainer;
