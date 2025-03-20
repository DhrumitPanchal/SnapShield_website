import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" mx-auto w-full py-10 px-16 max-sm:px-4 overflow-y-scroll h-screen">
      <h1 className="text-4xl font-bold mt-8 mb-6">Privacy Policy</h1>
      {/* <p className="text-gray-700 text-sm text-center mb-8">
        Effective Date: [DD/MM/YYYY] | Last Updated: [DD/MM/YYYY]
      </p> */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <p>We only collect the following information when you log in:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Name:</strong> To personalize your experience.
          </li>
          <li>
            <strong>Email Address:</strong> For authentication and
            communication.
          </li>
          <li>
            <strong>Profile Picture:</strong> (Optional) For a better user
            experience.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            Logging you into <strong>SnapShield</strong> securely.
          </li>
          <li>Personalizing your profile in the app.</li>
          <li>Providing account-related support if needed.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Data Sharing & Third-Party Services
        </h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            We do <strong>not</strong> sell, share, or trade your data with
            third parties.
          </li>
          <li>
            We use authentication providers (such as Google) for secure login.
          </li>
          <li>
            If required by law, we may share limited information with legal
            authorities.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Encryption:</strong> All data is securely transmitted and
            stored.
          </li>
          <li>
            <strong>No Data Storage:</strong> We do not store sensitive user
            data on our servers.
          </li>
          <li>
            <strong>Secure Authentication:</strong> We use trusted login
            providers.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Your Choices & Control
        </h2>
        <p>You can delete your account anytime from the app settings.</p>
        <p>
          You can revoke access to your Google login data from your Google
          account settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Children's Privacy</h2>
        <p>
          <strong>SnapShield</strong> is <strong>not</strong> intended for
          children under 13.
        </p>
        <p>We do not knowingly collect personal information from children.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy occasionally. Any changes will be
          posted in the app and on our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>If you have any questions or concerns, contact us at:</p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:dhrumitpanchal789@gmail.com"
            className="text-blue-600"
          >
            dhrumitpanchal789@gmail.com
          </a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://snapshield.vercel.app" className="text-blue-600">
            https://snapshield.vercel.app{" "}
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
