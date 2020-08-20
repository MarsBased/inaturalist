class DeviseMailer < Devise::Mailer
  # Note: do not send asm_group_id to Sendgrid from here. We do not want people
  # to be able to unsubscribe from reset password emails
  include Shared::MailerModule
  
  def devise_mail( record, action, opts={ } )
    user = if record.is_a?( User )
      record
    elsif record.respond_to?( :user )
      record.user
    end
    site = @site || user.try( :site ) || Site.default
    if user
      old_locale = I18n.locale
      I18n.locale = user.locale.blank? ? I18n.default_locale : user.locale
      opts = opts.merge(
        from: "#{site.name} <#{site.email_noreply}>",
        reply_to: site.email_noreply
      )
      if action.to_s == "confirmation_instructions"
        return false unless user.active_for_authentication?
        opts = opts.merge( subject: t( :welcome_to_inat, site_name: site.name ) )
      end
      begin
        DeviseMailer.default_url_options[:host] = URI.parse(site.url).host
      rescue
        # url didn't parse for some reason, leave it as the default
      end
      r = super( record, action, opts )
      I18n.locale = old_locale
      r
    else
      super( record, action, opts )
    end
  end

end
