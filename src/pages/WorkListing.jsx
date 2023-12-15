import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import workData from "../assets/data/worksData";
import WorkItem from "../components/UI/WorkItem";
import { Container, Row } from "reactstrap";

const WorkListing = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="أعمالنا">
			<CommonSection title="أعمالنا" />
			<section>
				<Container>
					<Row>
						{workData.map((item) => (
							<WorkItem item={item} key={item.id} />
						))}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default WorkListing;
