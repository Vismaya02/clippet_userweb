/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {Link} from "@mui/material";

const RefundCancellationPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Cancellation and Refund Policy</h1>
      <p>Thank you for choosing Clippet for your design needs.</p>
      <p>
        If, for any reason, You are not completely satisfied with a purchase, We
        invite You to review our policy on Cancellation and Refunds.
      </p>

      <h2 style={styles.subHeader}>Interpretation and Definitions</h2>
      <h3 style={styles.subSubHeader}>Interpretation</h3>
      <p>
        The words of which the initial letter is capitalised have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>

      <h3 style={styles.subSubHeader}>Definitions</h3>
      <p>
        <strong>Company</strong> (referred to as either "the Company", "We",
        "Us" or "Our" in this Agreement) refers to Clippet Technologies Pvt Ltd.
      </p>
      <p>
        <strong>Designs / Goods / Service</strong> refer to the custom digital
        design service items offered for sale on the website.
      </p>
      <p>
        <strong>Orders</strong> mean a request by You to purchase Goods from Us.
      </p>
      <p>
        <strong>Website</strong> refers to Clippet, accessible from{" "}
        <Link href="https://clippet.ai">https://clippet.ai</Link>
      </p>
      <p>
        <strong>You</strong> refers to the individual accessing or using the
        Service, or the company, or other legal entity on behalf of which such
        individual is accessing or using the Service, as applicable.
      </p>

      <h2 style={styles.subHeader}>Your Order Cancellation Rights</h2>
      <p>
        You are entitled to cancel Your Order within 15 minutes of placing the
        order without giving any reason for doing so.
      </p>
      <p>
        The deadline for cancelling an Order is until a designer is assigned
        post order placement or 15 minutes, whichever is earlier.
      </p>

      <h2 style={styles.subHeader}>Refund Policy</h2>
      <p>
        We do not offer any refunds/exchanges as we deal in custom design
        services which are made to order. However, we do make exceptions in case
        you:
      </p>
      <ul>
        <li>{"Don’t"} receive the design within the promised delivery time.</li>
        <li>
          We were unable to fulfill an assignment of the designer for your
          order.
        </li>
      </ul>
      <p>We reserve the right to:</p>
      <ul>
        <li>Request and review design product quality identification.</li>
        <li>
          Determine if the design has been damaged, abused, or used in any form.
        </li>
      </ul>
      <p>
        <strong>No Refunds</strong> once a variation is approved and delivery is
        complete.
      </p>

      <h2 style={styles.subHeader}>Contact Us</h2>
      <p>
        If you have any questions about our Returns and Refunds Policy, please
        contact us:
      </p>
      <ul>
        <li>
          Email:{" "}
          <Link href="mailto:support@clippet.ai">support@clippet.ai</Link>
        </li>
        <li>
          By visiting this page on our website:{" "}
          <Link href="https://clippet.ai">
            https://clippet.ai
          </Link>
        </li>
      </ul>
      <p>
        Reimbursement shall be made no later than 7 days from the day on which
        We receive and approve the cancellation. We will use the same means of
        payment as you used for the Order, and you will not incur any fees for
        such reimbursement.
      </p>
    </div>
  );
};

const styles = {
  container: {
    // maxWidth: "800px",
    // margin: "0 auto",
    padding: "20px",
    fontFamily: "globalFont,Arial, sans-serif",
    lineHeight: "1.6",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  subHeader: {
    fontSize: "1.5rem",
    marginTop: "20px",
    color: "#333",
  },
  subSubHeader: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#666",
  },
  link: {
    color: "#1a73e8",
    textDecoration: "none",
  },
};

export default RefundCancellationPolicy;
