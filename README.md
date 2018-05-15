# flow-typed-react-redux-repro

Running `yarn flow` on this code produces the following error:

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ src/InputContainer.js:6:9

Cannot return object literal because undefined [1] is incompatible with boolean [2].

     src/InputContainer.js
     3│ import Input from "./Input";
     4│
     5│ const mapStateToProps = (_, state) => {
 [2] 6│         return { readOnly: true };
     7│ };
     8│
     9│ export default connect(mapStateToProps)(Input);

     src/Input.js
 [1] 4│ type Props = { readOnly?: boolean };
```
