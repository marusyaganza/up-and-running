import { PropsWithChildren, useContext, useEffect, useState } from "react";
import { Header, Snackbar, Modal, AuthForm, Spinner } from "@up/design-system";
import { NotificationContext } from "../../context/NotificationContext";
import styles from "./PageLayout.module.css";
import { ROUTES } from "../../router/routes";
import {
  LoginInput,
  LoginMutation,
  SignUpInput,
  SignUpMutation,
} from "../../generated/graphql";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION, SING_UP_MUTATION } from "../../gql/mutations";
import { useAuth } from "../../hooks/useAuth";

const pages = [
  { text: "Flights", url: ROUTES.scheduleFlight },
  { text: "Upcoming", url: ROUTES.upcoming },
  { text: "History", url: ROUTES.history },
];

export interface PageLayoutProps {}

export const PageLayout = ({
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  const { notification, setNotification } = useContext(NotificationContext);
  const [showNotification, setShowNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [login, loginData] = useMutation<LoginMutation>(LOGIN_MUTATION);
  const [signUp, signUpData] = useMutation<SignUpMutation>(SING_UP_MUTATION);
  const { saveToken, isAuthenticated, logout } = useAuth();

  const userMenu = [
    { text: "Profile", url: "profile" },
    {
      text: "Logout",
      onClick: logout,
    },
  ];
  const data = loginData?.data?.login || signUpData?.data?.signUp;
  useEffect(() => {
    // const data = loginData?.data?.login || signUpData?.data?.signUp;
    if (data) {
      saveToken(data);
    }
  }, [loginData, signUpData]);

  console.log("data", data);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleLogin = (values: LoginInput) => {
    login({ variables: { input: values } });
    handleCloseModal();
  };

  const handleSignUp = (values: SignUpInput) => {
    signUp({ variables: { input: values } });
    handleCloseModal();
  };

  useEffect(() => {
    if (notification) {
      setShowNotification(true);
    }
  }, [notification]);

  const handleClose = () => {
    setNotification(undefined);
    setShowNotification(false);
  };

  const isLoading = loginData.loading || signUpData?.loading;

  return (
    <>
      <div>
        <Header
          routes={pages}
          userMenu={userMenu}
          onLoginButtonClick={handleOpenModal}
          isAuthenticated={isAuthenticated}
        />
        {isLoading ? (
          <Spinner />
        ) : (
          <main className={styles.page}>{children}</main>
        )}
        <Snackbar
          onClose={handleClose}
          open={showNotification}
          message={notification?.text}
          variant={notification?.variant}
        />
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <AuthForm onLoginSubmit={handleLogin} onSignUpSubmit={handleSignUp} />
      </Modal>
    </>
  );
};
