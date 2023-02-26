import { useContext } from 'react';

import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'absolute bottom-0 left-0 w-full';
  }

  if (status === 'error') {
    statusClasses = 'absolute bottom-0 left-0 w-full';
  }

  if (status === 'pending') {
    statusClasses = 'absolute bottom-0 left-0 w-full';
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
