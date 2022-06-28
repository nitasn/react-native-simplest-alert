# React Native Simplest Alert

Display an alert with a simple function call:
```
showAlert({
  header: 'Big Notice',
  body: 'You can now dismiss this message',
});
```

No need for extra JSX or "isAlertShown" props.


Optionally, you can pass an `onClick`:
```

showAlert({
  header: 'Posted!',
  body: 'Your post was posted. Click OK to proceed',
  onClick: () => navigation.navigate("SomePage"),
});

```

To use, wrap your app inside an `<AlertProvider>` tag:
```
import { AlertProvider } from 'react-native-simplest-alert';

export default function App() {
  return (
    <AlertProvider>
      {/* your code... */}
    </AlertProvider>
  );
}
```

Anywhere in your application:
```
import { showAlert } from 'react-native-simplest-alert';

function onPanic() { 
  showAlert({
    header: 'Troll! In the Dungeon!',
    body: 'Thought you ought to know',
    backgroundColor: 'darkred',
    buttonBgColor: 'red',
  });
}
```