equations = [{"equation_variable":"ms","equation":"((p1 - p2) / p1 < Fy * xT) ? mstrue : msfalse","description":"Steam loss rate. The true and false branches correspond to the test in the TLV formula"},{"equation_variable":"msfalse","equation":"0.66 * 63.3 * CS * (dsteam / 0.183) ^ 2 * sqrt(Fy * xT * p1 * steamdensity)","description":""},{"equation_variable":"mstrue","equation":"63.3 * CS * (dsteam / 0.183) ^ 2 * (1 - ((p1psia - p2psia) / p1psia) / (3 Fy * xT)) * sqrt((p1psia - p2psia) * steamdensity)","description":""},{"equation_variable":"Fy","equation":"0.95","description":"specific heat ratio factor"},{"equation_variable":"xT","equation":"0.72","description":"Pressure Differential Ratio Factor (=0.72)"},{"equation_variable":"steamdensity","equation":"0.579","description":""},{"equation_variable":"Qw","equation":"((p1psia - p2psia) < (FL ^ 2 * (p1psia - (FF * vaporpressure)))) ? Qwtrue : Qwfalse","description":""},{"equation_variable":"Qwfalse","equation":"60 * dischargecoefficient * (do / 0.183) ^ 2 * FL * sqrt((p1psia - FF * vaporpressure) / SG)","description":""},{"equation_variable":"Qwtrue","equation":"60 * dischargecoefficient * (do / 0.183) ^ 2 * sqrt((p1psia - p2psia) / SG)","description":""},{"equation_variable":"vaporpressure","equation":"30.3","description":""},{"equation_variable":"dischargecoefficient","equation":"0.8","description":""},{"equation_variable":"FF","equation":"0.92","description":""},{"equation_variable":"SG","equation":"0.95","description":"Specific Gravity"},{"equation_variable":"FL","equation":"0.9","description":""},{"equation_variable":"capacityoforifice","equation":"Qw * 8.345404","description":""},{"equation_variable":"protoCS","equation":"(invoccupancy - 0.03) ^ 3 + 0.1","description":"This cubic equation closely matches the eSteamG lookup table for the discharge coefficient of steam."},{"equation_variable":"CS","equation":"(protoCS > 1 or protoCS < 0.1) ? extremeCS : protoCS","description":"Discharge Coefficient for steam. Previously taken from eSteamG lookup table, now derived from a cubic approximation that closely matches the original table."},{"equation_variable":"extremeCS","equation":"(protoCS > 1) ? 1 : 0","description":"Discharge Coefficient ranges from 0 to 1, so when the cubic equation falls outside this range it's just cut off in order to minimize unintended behaviour"},{"equation_variable":"orificearea","equation":"(do / 2) ^ 2 * pi","description":""},{"equation_variable":"invoccupancy","equation":"1 - occupancy","description":""},{"equation_variable":"capacity","equation":"Qw * conversiontopounds","description":""},{"equation_variable":"inlet_temp","equation":"250","description":""},{"equation_variable":"occupancy","equation":"load / capacity","description":""},{"equation_variable":"conversiontopounds","equation":"8.345404","description":""},{"equation_variable":"QwTest","equation":"(FL ^ 2 * (p1psia - (FF * vaporpressure)))","description":""},{"equation_variable":"p1psia","equation":"p1 + 14.7","description":""},{"equation_variable":"p2psia","equation":"p2 + 14.7","description":""},{"equation_variable":"dsteam","equation":"sqrt(areasteam / pi) * 2","description":""},{"equation_variable":"areasteam","equation":"availableremainder * orificearea","description":""},{"equation_variable":"availableremainder","equation":"invoccupancy","description":""}];