(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{327:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"representation-of-public-transport-system-in-a-travel-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#representation-of-public-transport-system-in-a-travel-model"}},[e._v("#")]),e._v(" Representation of public transport system in a travel model")]),e._v(" "),a("p",[e._v("What aspects (objects and system phenomena) of the real-world public transport system can we capture in a travel model? A general wiki specifically on transit can be found "),a("a",{attrs:{href:"http://www.transitwiki.org/TransitWiki/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"transit-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transit-service"}},[e._v("#")]),e._v(" Transit Service")]),e._v(" "),a("p",[e._v("Transit service is often grouped by operating agency and is a representation for the service that that agency provides. Multiple agencies can operate on the same transit network.")]),e._v(" "),a("p",[a("a",{attrs:{href:"Transit_Route"}},[e._v("Transit Route")]),e._v(" represents how "),a("a",{attrs:{href:"Transit_Vehicles"}},[e._v("Transit Vehicles")]),e._v(" traverse the physical transit network infrastructure and where they stop.")]),e._v(" "),a("p",[a("a",{attrs:{href:"Transit_Vehicles"}},[e._v("Transit Vehicles")]),e._v(" are pretty much as-advertised and is the only capital component to the service.")]),e._v(" "),a("p",[a("a",{attrs:{href:"Transit_Route_Frequency"}},[e._v("Transit Route Frequency")]),e._v(" represents the timing of when each route is on the network. This is often an aggregate representation by time period, but can also be represented in continuous time as a schedule.")]),e._v(" "),a("p",[a("a",{attrs:{href:"Transit_Fares"}},[e._v("Transit Fares")]),e._v(" can be represented in numerous ways and are highly-dependent upon the commercial modeling system that is used. Ultimately, it is up to the modeler to decide what an appropriate level of approximation is for the purposes of the transit system that is being modeled and the effect that it will have on the project that the model is being used for.")]),e._v(" "),a("h3",{attrs:{id:"transit-network-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transit-network-infrastructure"}},[e._v("#")]),e._v(" Transit Network Infrastructure")]),e._v(" "),a("p",[a("a",{attrs:{href:"Transit_networks"}},[e._v("Transit Network")]),e._v("\nThe transit network infrastructure is the physical infrastructure on which transit service operates. This includes streets, "),a("a",{attrs:{href:"Transit_Stations"}},[e._v("Transit Stations")]),e._v(", "),a("a",{attrs:{href:"Transit_Fixed_Guideways"}},[e._v("Transit Fixed-Guideways")]),e._v(" and characteristics and components to these that affect how a transit vehicle operates.")]),e._v(" "),a("p",[e._v("Common transit infrastructure components include "),a("a",{attrs:{href:"Transit_Priority_Treatments"}},[e._v("Transit Priority Treatments")]),e._v(" such as:")]),e._v(" "),a("ul",[a("li",[e._v("Transit-only Lanes")]),e._v(" "),a("li",[e._v("Transit Signal Priority (TSP)")]),e._v(" "),a("li",[e._v("Queue-Jump lanes")])]),e._v(" "),a("h2",{attrs:{id:"passenger-behavior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passenger-behavior"}},[e._v("#")]),e._v(" Passenger behavior")]),e._v(" "),a("p",[e._v("How do passengers interact-with and judge the utility of the transit system? There are generally four components within a typical travel model that involve transit.")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"Transit_Path_Building"}},[e._v("Transit Path Building")]),e._v(" determines how the passengers choose to travel through the transit network")]),e._v(" "),a("li",[a("a",{attrs:{href:"Transit_Network_Service_Determination"}},[e._v("Transit Network Service Determination")]),e._v(" determines the value and utility of their transit option")]),e._v(" "),a("li",[a("a",{attrs:{href:"Mode_Choice"}},[e._v("Mode Choice")]),e._v(" is the model component where travelers choose whether to ride transit, given their own assessment about service quality compared to their other options")]),e._v(" "),a("li",[a("a",{attrs:{href:"Transit_Network_Assignment"}},[e._v("Transit Network Assignment")]),e._v(" is the process by which every traveler that has chosen to ride transit in the mode choice step, is then assigned to the network. The output of transit assignment is the number of boardings and alightings by time of day for each "),a("a",{attrs:{href:"Transit_Route"}},[e._v("Transit Route")]),e._v(" at each stop.")])]),e._v(" "),a("h2",{attrs:{id:"developing-a-transit-component-in-a-travel-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-transit-component-in-a-travel-model"}},[e._v("#")]),e._v(" Developing a Transit Component in a Travel Model")]),e._v(" "),a("h3",{attrs:{id:"desired-data-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#desired-data-sources"}},[e._v("#")]),e._v(" Desired Data Sources")]),e._v(" "),a("p",[e._v("Passenger Behavior Data:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"On_board_Surveys"}},[e._v("On-board Surveys")])]),e._v(" "),a("li",[a("a",{attrs:{href:"Travel_Survey_Data"}},[e._v("Household Travel Surveys")])]),e._v(" "),a("li",[e._v("Ridership Data (i.e. APC or manual counts)")]),e._v(" "),a("li",[e._v("Transit Routes taken by passengers (i.e. GPS)")])]),e._v(" "),a("p",[e._v("Transit Network Data:")]),e._v(" "),a("h3",{attrs:{id:"model-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-design"}},[e._v("#")]),e._v(" Model Design")]),e._v(" "),a("p",[e._v("Typical decisions and considerations include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"Transit_networks"}},[e._v("Transit Network")]),e._v(" design")]),e._v(" "),a("li",[a("a",{attrs:{href:"transit_mode_combinations"}},[e._v("Access mode, egress mode, transit mode combinations")])]),e._v(" "),a("li",[a("a",{attrs:{href:"schedule_versus_headway"}},[e._v("Schedule-based versus headway-based versus combination")])]),e._v(" "),a("li",[e._v("Calculation of "),a("a",{attrs:{href:"Transit_dwell_time"}},[e._v("dwell time")]),e._v(" at stops")]),e._v(" "),a("li",[a("a",{attrs:{href:"Incorporating_transit_amenities"}},[e._v("Incorporating transit amenities")]),e._v(" such as shelters, etc.")]),e._v(" "),a("li",[e._v("Consideration of "),a("a",{attrs:{href:"Transit_crowding"}},[e._v("transit crowding")]),e._v(" and park and ride crowding")]),e._v(" "),a("li",[e._v("Consideration of "),a("a",{attrs:{href:"Transit_reliability"}},[e._v("transit reliability")])]),e._v(" "),a("li",[a("a",{attrs:{href:"Path_Choice_Mode_choice_Consistency"}},[e._v("Consistency in path-building and mode-choice parameters")])]),e._v(" "),a("li",[e._v("Assignment of bus vehicles and park and ride vehicles to the auto network")]),e._v(" "),a("li",[a("a",{attrs:{href:"Transit_Path_Parameters"}},[e._v("Path building parameters")])])]),e._v(" "),a("h3",{attrs:{id:"model-construction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-construction"}},[e._v("#")]),e._v(" Model Construction")]),e._v(" "),a("p",[e._v("This is the act of coding up your design into the modeling system. This can range from writing your own low-level code, to using a GUI in a commercial modeling package and selecting appropriate parameters and options.")]),e._v(" "),a("h3",{attrs:{id:"model-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-calibration"}},[e._v("#")]),e._v(" Model Calibration")]),e._v(" "),a("p",[e._v("The act of adjusting parameters within the model system to more accurately and appropriately reflect what happens in real life. Typical calibration adjustments for public transport modeling include:")]),e._v(" "),a("ul",[a("li",[e._v("network path building parameters")]),e._v(" "),a("li",[e._v("mode choice parameters (including alternative specific constants)")]),e._v(" "),a("li",[e._v("corrections and adjustments to the transit network representation, or the representation of an alternative mode")])]),e._v(" "),a("h3",{attrs:{id:"model-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model-validation"}},[e._v("#")]),e._v(" Model Validation")]),e._v(" "),a("p",[e._v("This is often an iterative process with model calibration. Validation is an assessment of how well the model is performing at an absolute level AND how appropriate the model sensitivities are. Typical transit model validation items are:")]),e._v(" "),a("ul",[a("li",[e._v("Modeled/to observed ridership scatter plots at system, line, and stop level")]),e._v(" "),a("li",[e._v("RMSE, R-squared, absolute differences")])]),e._v(" "),a("h2",{attrs:{id:"performance-measures-and-sensitivities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-measures-and-sensitivities"}},[e._v("#")]),e._v(" Performance Measures and Sensitivities")]),e._v(" "),a("p",[e._v("What are planners and decision makers typically interested in learning when they look at public transit in travel models? here are a few examples of use-cases and performance measures. It is important to consider that performance measures should not be reported for outputs that have not been validated.")]),e._v(" "),a("p",[a("strong",[e._v("Performance-measures")]),e._v(" (at area, corridor, route, or stop-level):")]),e._v(" "),a("ul",[a("li",[e._v("Ridership (possibly segmented into choice or dependent riders)")]),e._v(" "),a("li",[e._v("Person miles/hours travelled (AKA PMT or PHT)")]),e._v(" "),a("li",[e._v("PMT or PHT in crowded conditions")]),e._v(" "),a("li",[e._v("Volume to capacity ratios at a line or link level")]),e._v(" "),a("li",[e._v("Travel time")]),e._v(" "),a("li",[e._v("Average transfer rates")]),e._v(" "),a("li",[e._v("Average walk times/distances")]),e._v(" "),a("li",[e._v("Mode share")]),e._v(" "),a("li",[e._v("VMT per person trip (measure of trip-efficiency)")]),e._v(" "),a("li",[e._v("Wait time")]),e._v(" "),a("li",[e._v("Delay")])]),e._v(" "),a("p",[a("strong",[e._v("Use Cases")]),e._v(":")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"Capital_Investment_Grant_Program_aka_New_Starts"}},[e._v("Small Starts / New Starts")]),e._v(")")]),e._v(" "),a("li",[a("a",{attrs:{href:"Long_range_transportation_plan"}},[e._v("Long range transportation plan")])]),e._v(" "),a("li",[a("a",{attrs:{href:"Project_Prioritization"}},[e._v("Project Prioritization")])]),e._v(" "),a("li",[a("a",{attrs:{href:"Corridor_Study"}},[e._v("Corridor Study")])]),e._v(" "),a("li",[e._v("Policy Study (i.e. cordon-based "),a("a",{attrs:{href:"congestion_pricing"}},[e._v("congestion pricing")]),e._v(")")])]),e._v(" "),a("h2",{attrs:{id:"application-and-forecasting-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-and-forecasting-considerations"}},[e._v("#")]),e._v(" Application and Forecasting Considerations")]),e._v(" "),a("h2",{attrs:{id:"research-avenues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#research-avenues"}},[e._v("#")]),e._v(" Research Avenues")]),e._v(" "),a("ul",[a("li",[e._v("Person-based dynamic transit assignment")]),e._v(" "),a("li",[e._v("Tour-based path evaluation for park and ride facilities")])]),e._v(" "),a("h2",{attrs:{id:"related-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-content"}},[e._v("#")]),e._v(" Related Content")]),e._v(" "),a("p",[e._v("{{#ask: "),a("a",{attrs:{href:"_"}},[e._v("_")]),e._v("\n| format=ul\n}}")]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=s.exports}}]);