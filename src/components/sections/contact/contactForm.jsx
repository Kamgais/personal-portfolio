import React from 'react'
import {RiMailLine } from '@remixicon/react'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Loader from '../../ui/loader';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';


const ContactForm = () => {
    const defaultValues = {
        name: "",
        message: "",
        email: ""
    }

    const schema = z.object({
        name: z.string().trim().min(6).max(50),
        email: z.string().email(),
        message: z.string().trim().min(1)

    })
    const {register, reset, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        defaultValues,
        resolver: zodResolver(schema)
    });

    const accessKey = import.meta.env.VITE_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Personal Portfolio",
      subject: "New Contact Message from your Portfolio Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
        toast.success('Successfully sent the message!')
      reset();
    },
    onError: (msg, data) => {
    toast.error("Failed to send the message")
    },
  });

   
    return (
        <div className="col-lg-8">
            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contactForm" name="contactForm"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" className="form-control" defaultValue="" placeholder="Steve Milner" data-error="Please enter your Name" {...register("name", {required: true})} />
                                <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                                <div className="help-block with-errors">{errors.name?.message ? errors.name.message: ""}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" className="form-control" defaultValue="" placeholder="hello@websitename.com"  data-error="Please enter your Email" {...register("email", {required: true})} />
                                <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                                <div className="help-block with-errors">{errors.email?.message ? errors.email.message: ""}</div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Write Your message"  data-error="Please Write your Message" {...register("message", {required: true})}></textarea>
                                <div className="help-block with-errors">{errors.message?.message ? errors.message.message: ""}</div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group mb-0">
                                <button type="submit" className="theme-btn" disabled={isSubmitting}>
                                    Send Me Message <i>
                                        {
                                            isSubmitting ? <Loader/> : <RiMailLine size={16}/>
                                        }
                                        
                                        </i>
                                </button>
                                <div id="msgSubmit" className="hidden"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm