from ecmwfapi import ECMWFDataServer
    
server = ECMWFDataServer()
    
server.retrieve({
    'stream'    : "oper",
    'levtype'   : "sfc",
    'param'     : "tcno2/tcso2",
    'dataset'   : "cams_nrealtime",
    'step'      : "0",
    'expver'    : "0001",
    'time'      : "00",
    'date'      : "2018-09-01/to/2018-09-11",
    'type'      : "fc",
    'class'     : "mc",
    # "format"    : "netcdf",
    'target'    : "python-data/data.nc"
})