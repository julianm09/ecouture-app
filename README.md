## Getting Started

1. Install dependencies

```bash
npm install
```

2. run the storybook:

```bash
npm run storybook
```


3. create components in comps folder 

* Capital + Camel Case
 
* example: BlueButton.js 


4. Import styled-components in component file

 ```
import styled from 'styled-components'
```

4. Name styled components 

* Capital + Camel Case + UI
 

 ```
const BlueButtonUI = styled.div`

** css goes in here **

`;
```

5. Create Component 

* Capital + Camel Case 
 

 ```
export const BlueButton = () => {

    return(

        <BlueButtonUI></BlueButtonUI>

    )

} 
```

5. Display to storybook in stories/comps.stories.js

 ```
//import components from comps//
import { Button } from '../comps/Button';

//export components to storybook//
export const Button = ButtonUI

```
