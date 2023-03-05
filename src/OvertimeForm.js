import React from "react";
import { Form } from "react-router-dom";

function OvertimeForm() {
	return (
		<div>
			<Form action="" className="login">
				<div>
					<label htmlFor="startdate">
						Start Date
						<input type="date" name="startdate" className="w300" />
					</label>
				</div>

				<div>
					<label htmlFor="starthour">
						Start Hour
						<input type="time" name="starthour" className="w300" />
					</label>
				</div>

				<div>
					<label htmlFor="endhour">
						End Hour
						<input type="time" name="endhour" className="w300" />
					</label>
				</div>

				<div>
					<label htmlFor="overtimepurpose">
						Purpose Of Overtime
						<input type="text" name="overtimepurpose" className="w300 h200" />
					</label>
				</div>
			</Form>
		</div>
	);
}

export default OvertimeForm;
