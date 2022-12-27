import React, {useState, useEffect, useCallback} from 'react'
import {Page, TextField, Card, Layout} from '@shopify/polaris'
export const NumberContext = React.createContext(0)
const CreateStudent = () => {
	const [studentName, setStudentName] = useState()
	const handleChangeStudentName = useCallback((newValue) => setStudentName(newValue), [])
  return (
    <>
      <main>
				<Page title='Tạo học viên' fullWidth>
					<Layout>
						<Layout.Section oneHalf>
							<Card title='' sectioned>
								<TextField
									label="Tên học viên"
									type='text'
									value={studentName}
									
									onChange={handleChangeStudentName}
									autoComplete="off"
								/>
							</Card>
						</Layout.Section>
						<Layout.Section oneHalf>
							<Card title='' sectioned>
								<TextField
									label="Tên học viên"
									type='text'
									value={studentName}
									
									onChange={handleChangeStudentName}
									autoComplete="off"
								/>
							</Card>
						</Layout.Section>
						<Layout.Section oneHalf>
							<Card title='' sectioned>
								<TextField
									label="Tên học viên"
									type='text'
									value={studentName}
									
									onChange={handleChangeStudentName}
									autoComplete="off"
								/>
							</Card>
						</Layout.Section>
					</Layout>
				</Page>
      </main>
    </>
  );
};

export default CreateStudent
