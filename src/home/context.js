import React, {useState} from 'react';

//创建上下文
export const context = React.createContext();

export let UseProvider = (props) => {
	let [count, setCount] = useState(0);

	return (
		<context.Provider value={{count, setCount}}>
			{props.children}
		</context.Provider>
	);
}

//导出provider（生产者）、consumer（消费者）
export let Consumer = context.Consumer;
