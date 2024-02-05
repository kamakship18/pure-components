Question: Which out of the two components (which are performing the same functionality) is performing better and how? 

Answer: PureCounterComponent has the potential for better performance in more complex scenarios beacuse PureComponent automatically performs a shallow comparison of the current and next props and state. If there are no changes, it prevents unnecessary renders. 