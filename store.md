Svelte stores alllows applications to share data between many components without passing it through other components before it as props.

Using a store like this keeps the code simpler and means we don’t have to keep track of this data as it goes through all these components.

stores are also reactive; if a store value is updated anywhere, all the components using that store will reflect the updated state

Before a component is able to read or write to a store, it must subscribe to it. **All stores must have a subscribe method,** which will update its values externally (in the components) when any of its values change.


