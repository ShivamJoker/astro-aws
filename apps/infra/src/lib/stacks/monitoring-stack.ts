import { Stack } from "aws-cdk-lib";
import { Dashboard } from "aws-cdk-lib/aws-cloudwatch";
import type { Construct } from "constructs";

import type { AstroAWSStackProps } from "../types/astro-aws-stack-props";

export type MonitoringStackProps = AstroAWSStackProps;

export class MonitoringStack extends Stack {
	public readonly cloudwatchDashboard: Dashboard;

	public constructor(scope: Construct, id: string, props: MonitoringStackProps) {
		super(scope, id, props);

		const { environment } = props;

		this.cloudwatchDashboard = new Dashboard(this, `AstroAWSDashboard-${environment}`, {
			dashboardName: `AstroAWS-${environment}`,
		});
	}
}
