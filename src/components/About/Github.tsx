import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";

function Github() {
	return (
		<Container fluid>
			<Row className="justify-content-center mb-4">
				<Col xs={12} className="text-center">
					<h1
						className="project-heading"
						style={{
							fontSize: "1.8em",
							paddingBottom: "30px",
							marginBottom: "20px",
						}}
					>
						Days I <strong className="purple">Code</strong>
					</h1>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs={12} className="d-flex justify-content-center">
					<div
						style={{
							width: "100%",
							maxWidth: "900px",
							overflow: "auto",
							padding: "20px",
							backgroundColor: "rgba(255,255,255,0.05)",
							borderRadius: "15px",
							boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
						}}
					>
						<GitHubCalendar
							username="HassenBenHadjHassen"
							blockSize={12}
							blockMargin={4}
							fontSize={14}
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Github;
