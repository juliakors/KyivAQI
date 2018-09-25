from ecmwfapi import ECMWFDataServer
    
server = ECMWFDataServer()
    
server.retrieve({
    'stream'    : "oper",
    'levtype'   : "sfc",
    'param'     : "aod550",
    'dataset'   : "cams_nrealtime",
    'step'      : "0",
    'expver'    : "0001",
    'time'      : "00",
    'date'      : "2016-06-01/to/2016-06-11",
    'type'      : "fc",
    'class'     : "mc",
    "format"    : "netcdf",
    'target'    : "cams_nrealtime.nc"
})