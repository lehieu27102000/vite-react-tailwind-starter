import React, {useState, useEffect, useRef} from 'react'
import {AppProvider, Page, Card, Button, DataTable, List} from '@shopify/polaris';
import {CustomerPlusMajor} from '@shopify/polaris-icons'
export const NumberContext = React.createContext(0)
const Index = () => {
	const primaryAction = (
		<Button icon={CustomerPlusMajor} primary url='/add-student'>
			Tạo mới học viên
		</Button>
	)
	const rows = [
		['Lê Minh Hiếu', 'hieu@gmail.com', '0343129031' , 'Hà Nội'],
		['Lê Tiến Trung', 'trung@gmail.com', '0966558861', 'Hà Nội'],
	];
  return (
    <React.Fragment>
      <main>
			<Page
				fullWidth
				title="Danh sách học viên"
				primaryAction={primaryAction}
			>
				<Card title="" sectioned>
				<DataTable
						columnContentTypes={[
							'text',
							'text',
							'text',
							'text',
						]}
						headings={[
							'Họ tên',
							'Email',
							'Số điện thoại',
							'Địa chỉ',
						]}
						rows={rows}
					/>
				</Card>
			</Page>
      </main>
    </React.Fragment>
  );
};

export default Index
