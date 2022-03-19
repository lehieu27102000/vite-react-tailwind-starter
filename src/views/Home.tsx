import React, {useState, useEffect, useRef} from 'react'
import Header from '../components/Header'
import {AppProvider, Page, Card, Button, DataTable, List} from '@shopify/polaris';
export const NumberContext = React.createContext(0)
const Home = () => {
	const [count, setCount] = useState(4)
	
	function decrementCount () {
		setCount(count - 1)
	}
	function incrementCount () {
		setCount(count + 1)
	}
	const rows = [
		['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
		['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
		[
			'Navy Merino Wool Blazer with khaki chinos and yellow belt',
			'$445.00',
			124518,
			32,
			'$14,240.00',
		],
	];
    const ok = () => {
        console.log('kjdksjd')
    }
	
    const numberRef = useRef<HTMLSpanElement>(null)
		useEffect(() => {
		return function cleanUp() {
			console.log('lkjdlskl')
		}
	}, [count])
    
  return (
    <React.Fragment>
			{/* <NumberContext.Provider value={count}>
				<Header title="Home" subTitle="hieu dep trai" />
			</NumberContext.Provider> */}
      <main>
			<Page title="Sale Lê Minh Hiếu" fullWidth>
				<Button onClick={ok} textAlign="right">Save product</Button>
				<Card
					title="Shipment 1234"
					secondaryFooterActions={[
						{content: 'Xóa', destructive: true, onAction:ok},
					]}
					primaryFooterAction={{content: 'thêm'}}
				>
					<Card.Section title="Items">
						<List>
							<List.Item>1 × Oasis Glass, 4-Pack</List.Item>
							<List.Item>1 × Anubis Cup, 2-Pack</List.Item>
						</List>
					</Card.Section>
					<DataTable
						columnContentTypes={[
							'text',
							'numeric',
							'numeric',
							'numeric',
							'numeric',
						]}
						headings={[
							'Product',
							'Price',
							'SKU Number',
							'Net quantity',
							'Net sales',
						]}
						rows={rows}
						totals={['', '', '', 255, '$155,830.00']}
					/>
				</Card>
			</Page>
      </main>
    </React.Fragment>
  );
};

export default Home
