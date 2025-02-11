import { logger } from 'services/logger';

const RouteWrapper = ({ component: Component, ...rest }) => {
  useEffect(() => {
    logger.route(rest.name, 'Accessed');
  }, [rest.name]);

  return <Component {...rest} />;
};

const routes = [
  {
    type: "collapse",
    name: "Psychic Chat",
    key: "psychic-chat",
    route: "/psychic-chat",
    icon: <Icon>chat</Icon>,
    component: (props) => <RouteWrapper component={PsychicChat} {...props} name="Psychic Chat" />,
    noCollapse: true,
  },
  // ... wrap other routes similarly
]; 