import React from 'react';
import { useMutation } from 'react-query';
import { useForm ,Controller  } from 'react-hook-form';

import { Box } from '@mui/system';
import { Grid, Button, TextField, Typography } from '@mui/material';

const inputProps = { borderRadius: '100px', height: '35px', fontSize: '14px' } 

function BuyDomainForm() {
    const { control, handleSubmit, formState: { errors } , reset} = useForm();
    
    const createDomain = useMutation((newDomain) => {
        return fetch('http://localhost:3000/domains', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newDomain),
        }).then(() => {
            reset()
        });
    });
    

    const onSubmit = (data) => {
        createDomain.mutate(data);
  };


  return (
    <Box sx={{ mt: 5 }}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowSpacing={2} columnSpacing={3}>
                <Grid item xs={6}>
                     <Typography sx={{mb: 1 , pl: 1}}>
                        First Name
                      </Typography>
                      
                      <Controller
                        name="first_name"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'first name is required',
                        minLength: {
                            value: 4,
                            message: 'first name must be at least 4 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="First Name"
                            
                                fullWidth
                                error={!!errors.first_name}
                                helperText={errors.first_name?.message}
                        />
                        )}
                      />
                </Grid>
                  
                <Grid item xs={6}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Second Name
                      </Typography>

                      <Controller
                        name="second_name"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'Second name is required',
                        minLength: {
                            value: 4,
                            message: 'Second name must be at least 4 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                              placeholder="Second Name"
                            fullWidth 
                            error={!!errors.second_name}
                                  helperText={errors.second_name?.message}
                        />
                        )}
                      />
                     
                  </Grid>
                  <Grid item xs={6} sx={{mt: 1}}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Company Name
                      </Typography>

                      <Controller
                        name="company"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'company name is required',
                        minLength: {
                            value: 4,
                            message: 'company name must be at least 4 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder=" Company Name"
                            fullWidth 
                            error={!!errors.company}
                                  helperText={errors.company?.message}
                        />
                        )}
                      />
                  </Grid>
                  
                  <Grid item xs={6}  sx={{mt: 1}}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Email
                      </Typography>

                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                          },
                        }}
                        render={({ field }) => (
                            <TextField

                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Email"
                            fullWidth 
                            error={!!errors.email}
                                  helperText={errors.email?.message}
                        />
                        )}
                      />

                  </Grid>
                  
                  <Grid item xs={12}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Address Line 1
                      </Typography>

                      <Controller
                        name="address_line_1"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'address line 1 is required',
                        minLength: {
                            value: 15,
                            message: 'address line 1 must be at least 15 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter Address Line 1"
                            fullWidth 
                            error={!!errors.address_line_1}
                                  helperText={errors.address_line_1?.message}
                        />
                        )}
                      />
                     
                    </Grid>
       
                  
                    <Grid item xs={12}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Address Line 2
                      </Typography>

                      <Controller
                        name="address_line_2"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'address line 2 is required',
                        minLength: {
                            value: 15,
                            message: 'address line 2 must be at least 15 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter Address Line 1"
                            fullWidth 
                            error={!!errors.address_line_2}
                                  helperText={errors.address_line_2?.message}
                        />
                        )}
                      />
                     
                  </Grid>
                  

                  <Grid item xs={6}>
                    <Typography sx={{mb: 1 , pl: 1}}>
                        City
                      </Typography>
                      
                      <Controller
                        name="city"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'city name is required',
                        minLength: {
                            value: 4,
                            message: 'city name must be at least 4 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter City"
                            fullWidth 
                            error={!!errors.city}
                                  helperText={errors.city?.message}
                        />
                        )}
                      />
                  
                </Grid>
                  
                <Grid item xs={6}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          State
                      </Typography>

                      <Controller
                        name="state"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'state name is required',
                        minLength: {
                            value: 4,
                            message: 'state name must be at least 4 characters',
                        },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter State"
                            fullWidth 
                            error={!!errors.state}
                                  helperText={errors.state?.message}
                        />
                        )}
                      />

                      
                  </Grid>

                  <Grid item xs={6}>
                    <Typography sx={{mb: 1 , pl: 1}}>
                       Zip Code
                      </Typography>
                      
                      <Controller
                        name="zip_code"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'zip code is required',
                        pattern: {
                            value: /^[0-9]{5}$/,
                            message: 'Please enter a valid 5-digit zip code',
                          },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter  Zip Code"
                            fullWidth 
                            error={!!errors.zip_code}
                                  helperText={errors.zip_code?.message}
                        />
                        )}
                      />

                
                </Grid>
                  
                <Grid item xs={6}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Phone Number
                      </Typography>

                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                        required: 'phone number is required',
                        pattern: {
                            value: /^\d{11}$/,
                            message: 'Please enter a valid 11-digit phone number',
                          },
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter Phone Number"
                            fullWidth 
                            error={!!errors.phone}
                                  helperText={errors.phone?.message}
                        />
                        )}
                      />

                  </Grid>

                  <Grid item xs={12}>
                      <Typography sx={{mb: 1 , pl: 1}}>
                          Country
                      </Typography>
                      <Controller
                        name="country"
                        control={control}
                        rules={{
                        required: 'counter name is required'
                        
                        }}
                        render={({ field }) => (
                            <TextField
                            {...field}
                            InputProps={{ style: inputProps }}
                            placeholder="Enter country"
                            fullWidth 
                            error={!!errors.country}
                            helperText={errors.country?.message}
                        />
                        )}
                      />
       </Grid>
      </Grid>
              <Box sx={{display: 'flex' , justifyContent: 'center'}}>
              <Button type="submit" variant="contained" color="success" sx={{mt : 4 , borderRadius: '100px' , px: 4 , fontWeight: '200'}}>
        Buy Now
      </Button>
      </Box>
    </form>
  </Box>
  );
}

export default BuyDomainForm;
